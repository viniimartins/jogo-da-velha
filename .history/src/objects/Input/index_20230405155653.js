import React from "react";
import Label from "../Label";

const Input = ({ id, value, content, type }) => {
    return (
        <>
            <input id={id} type={type} value={value} />
            <Label htmlFor={id} content={content} />
        </>

    )
}


export default Input