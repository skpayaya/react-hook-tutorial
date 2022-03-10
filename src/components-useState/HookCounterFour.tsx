import React, { useState } from "react";

interface Item {
    id: number;
    value: any;
}

const HookCounterFour = () => {
    const [items, setItems] = useState<Array<Item>>([]);

    const addItem = () => {
        setItems([
            ...items,
            { id: items.length, value: Math.floor(10 * Math.random()) + 1 },
        ]);
    };
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default HookCounterFour;
