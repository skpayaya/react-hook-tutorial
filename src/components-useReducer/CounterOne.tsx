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

const CounterOne = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div>
            {state}
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
};

export default CounterOne;
