import React, { useEffect, useState } from "react";

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log("Mounting Hook Mouse");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            console.log("Unmounting Hook Mouse");
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    const logMousePosition = (e: MouseEvent) => {
        setX(e.clientX);
        setY(e.clientY);
    };
    return (
        <div>
            Hooks X - {x} - Y -{y}
        </div>
    );
};

export default HookMouse;
