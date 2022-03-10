import React, { useEffect, useState } from "react";

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    // useEffect runs on every render
    // if second paramaeter changes, then only effect will bee executed
    useEffect(() => {
        console.log("updating document title");
        document.title = `Click ${count} times`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
};

export default HookCounterOne;
