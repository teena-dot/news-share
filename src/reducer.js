import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
} from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((n) => n.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case HANDLE_PAGE:
      if (action.payload == "inc") {
        let nextpage = state.page + 1;
        if (nextpage > state.nbPages - 1) {
          nextpage = 0;
        }
        return { ...state, page: nextpage };
      }
      if (action.payload == "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};

export default reducer;
