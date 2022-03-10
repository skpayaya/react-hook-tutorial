import React, { useReducer } from "react";
type initState = {
    firstCounter: number;
    secondCounter: number;
};
type ACTIONTYPE =
    | { type: "increment"; value: number }
    | { type: "decrement"; value: number }
    | { type: "increment2"; value: number }
    | { type: "decrement2"; value: number }
    | { type: "reset" };

const intialState: initState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state: initState, action: ACTIONTYPE): initState => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value,
            };
        case "decrement":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value,
            };
        case "increment2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value,
            };
        case "decrement2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value,
            };
        case "reset":
            return intialState;
        default:
            return state;
    }
};

const CounterTwo = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <div>
            First Count - {state.firstCounter}
            Second Count - {state.secondCounter}
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>
                Increment by 5
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
                Decrement by 5
            </button>
            <div>
                <button
                    onClick={() => dispatch({ type: "increment2", value: 2 })}
                >
                    Increment counter 2
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement2", value: 2 })}
                >
                    Decrement counter 2
                </button>
            </div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default CounterTwo;
