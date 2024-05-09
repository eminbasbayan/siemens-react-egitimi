import { Fragment, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count - 1)}>-</button>
    </Fragment>
  );
  //   return (
  //     <>
  //       <button onClick={() => setCount(count + 1)}>+</button>
  //       <strong>{count}</strong>
  //       <button onClick={() => setCount(count - 1)}>-</button>
  //     </>
  //   );
}

export default Counter;
