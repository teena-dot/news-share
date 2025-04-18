import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import Button from "./Button";
import Stories from "./Stories";
import Parent from "./Memo";
import DynamicForm from "./DynamicForm";
import CounterHook from "./CounterHook";
import EventPro from "./EventPro";

function App() {
  const { coount ,inc , dec, res } = CounterHook(10, 1);
  return (
    <div className="App">
      <Parent />
      <DynamicForm />
      {/* <SearchForm />
      <Button />
      <Stories /> */}
      <hr></hr>

      <h3> Counts : {coount} </h3>
      <button onClick={inc}>➕ </button>
      <button onClick={dec}> ➖ </button>
      <button onClick={res}> 🔁 </button>
      <EventPro/>
    </div>
  );
}

export default App;
