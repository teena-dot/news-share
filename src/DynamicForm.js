import React, { useState } from "react";

export default function DynamicForm() {
  const [list, setList] = useState([{ name: "", age: "" }]);

  const handleChange = (e, index, key) => {
    const updateField = [...list];
    key != "age"
      ? (updateField[index].name = e.target.value)
      : (updateField[index].age = e.target.value);
    setList(updateField);
  };
  const handlesave = () => {
    console.log(list);
  };
  const handleAdd = () => {
    setList([...list, { name: "", age: "" }]);
  };
  const handleRemove = (index) => {
  
    let remLis = list.filter((_,i) => i !== index)
    console.log(remLis)
    setList(remLis)
   
  };
  return (
    <div>
      <h1> Create Dynamic Form</h1>

      {list.map((val, index) => (
        <>
          <div key={index}>
            {" "}
            Name
            <input
              name="Name"
              value={val.value}
              onChange={(e) => handleChange(e, index, "name")}
            />{" "}
            Age
            <input
              name="age"
              value={val.value}
              onChange={(e) => handleChange(e, index, "age")}
            />
            <button onClick={() => handleRemove(index)}> Remove </button>
          </div>
          <br></br>
        </>
      ))}
      <br></br>
      <button onClick={() => handleAdd()}>Add </button>
      <button onClick={() => handlesave()}>Save </button>
    </div>
  );
}
