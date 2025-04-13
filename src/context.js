import React, { useContext, useEffect, useReducer } from "react";

import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
} from "./action";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?"

const initialState = {
  isLoading: true,
  hist: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvide = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
       dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
     fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvide };
