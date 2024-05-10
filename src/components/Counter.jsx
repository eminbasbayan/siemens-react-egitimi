import { Fragment } from "react";
import { useSelector } from "react-redux";

function Counter() {
  const { count, value } = useSelector((state) => state.counter);
  console.log(value);
  return (
    <Fragment>
      <button onClick={() => {}}>+</button>
      <strong>{count}</strong>
      <button onClick={() => {}}>-</button>
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
