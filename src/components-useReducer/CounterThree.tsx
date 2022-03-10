import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state: number, action: string): number => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return intialState;
        default:
            return state;
    }
};

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, intialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, intialState);

    return (
        <div>
            Count One - {count}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            Count Two - {countTwo}
            <button onClick={() => dispatchTwo("increment")}>Increment</button>
            <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
            <button onClick={() => dispatchTwo("reset")}>Reset</button>
        </div>
    );
};

export default CounterThree;
