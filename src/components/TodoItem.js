import React from "react";

const TodoItem = ({text, completed, onToggle}) => {
    const itemStyle = {
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer",
        padding: "10px",
        border: "1px solid #ccc",
        marginBottom: "5px",
    };

    return(
        <li style={itemStyle} onClick={onToggle}>
            {" "}
            { }
            {text}{" "}
        </li>
    );
};

export default TodoItem;