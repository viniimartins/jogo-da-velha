import React from "react";

const Input = ({ id = "", value = "", content = "", type = "text" }) => {
    return (
        <>
            <input id={id} type={type} value={value} />
        </>

    )
}


export default Input