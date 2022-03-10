import React, { Dispatch } from "react";
import { useReducer } from "react";
import "./App.css";
import ComponentA from "./components-useReducer/ComponentA";
import ComponentB from "./components-useReducer/ComponentB";
import ComponentC from "./components-useReducer/ComponentC";
import CounterOne from "./components-useReducer/CounterOne";
import CounterThree from "./components-useReducer/CounterThree";
import CounterTwo from "./components-useReducer/CounterTwo";

// export const UserContext = React.createContext("SKP");
// export const ChannelContext = React.createContext("ayayaya");

const intialState = 0;

const reducer = (state: any, action: any): any => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
};
interface ICountContext {
    countState: number;
    countDispatch: Function;
}
export const CountContext = React.createContext({} as any);

function App() {
    const [count, dispatch] = useReducer(reducer, intialState);

    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div className="App">
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>

        // <div className="App">
        //     <UserContext.Provider value={"SKP"}>
        //         <ChannelContext.Provider value={"AYAYA"}>
        //             <ThemeComponent />
        //         </ChannelContext.Provider>
        //     </UserContext.Provider>
        // </div>
    );
}

export default App;
