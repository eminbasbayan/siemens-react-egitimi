import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "../redux/slices/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <button onClick={() => dispatch(arttir())}>+</button>
      <strong>{count}</strong>
      <button onClick={() => dispatch(azalt())}>-</button>
    </Fragment>
  );
}

export default Counter;
