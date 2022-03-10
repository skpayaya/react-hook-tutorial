import React, { useState } from "react";

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <button onClick={() => setCount((count) => count - 1)}>
                Decrease
            </button>
            <button onClick={() => setCount(initialCount)}>
                Reset {count}
            </button>
            <button onClick={() => setCount((count) => count + 1)}>
                Increase
            </button>
        </div>
    );
};

export default HookCounterTwo;
