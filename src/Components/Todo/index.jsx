import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
//  import { getCount } from "../../Reducer/CountReducer";
// import { getCounterValue } from "../../Reducer/CountReducer";

// import { useDispatch } from "react-redux";
// import { getCount } from "../../Reducer/CountReducer";

import { getTodoCount } from "../../Reducer/CountReducer";

import { useDispatch } from "react-redux";

function Todo() {
  const [count, setCount] = useState(0);
  // const dispatch = useDispatch();

  // dispatch(getCounterValue(count));

  // const dispatch = useDispatch();
  // dispatch(getCount(count));

  const kishor = useDispatch();

  kishor(getTodoCount(count));

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p>countn is{count}</p>

        <div>
          <button onClick={() => setCount(count + 1)}>Increse</button>
          <p></p>
          <button onClick={() => setCount(count - 1)}>decrese</button>
        </div>
      </div>
    </>
  );
}

export default Todo;
