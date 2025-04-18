import React, { Suspense, useState } from "react";

const YouCom = ({ name }) => {
  console.log(name);
  return (
    <>
      {" "}
      <div>{name} </div>{" "}
    </>
  );
};

const Child = React.memo(YouCom);
const Lazy = React.lazy(() => import("./BigLazy"));
const Parent = () => {
  const [count, setCount] = useState(0);
  const [tog, setTog] = useState(false);
  return (
    <div>
      <h3> Hello this is parent</h3>
      <button onClick={() => setTog(!tog)}>Load Lazy Componet </button>
      <br></br>
      <Suspense fallback={<p> loadging... </p>}>{tog && <Lazy />}</Suspense>
      <br></br>
      <button onClick={() => setCount(count + 1)}> Inc</button> <br></br>
      {count}
      <Child name="teena" />
    </div>
  );
};

export default Parent;
