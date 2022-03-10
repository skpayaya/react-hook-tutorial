import React, { useState } from "react";
import HookMouse from "./HookMouse";
// useEffect with cleanup

// useffect is basically the substitute for componentDidMount ,ComponentDidUpdate,componentWillUnmount

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    );
};

export default MouseContainer;
