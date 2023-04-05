import React from "react";
import Label from "../Label";

const Input = ({ id, value }) => {
    return (
        <>
            <input id={id} type="checkbox" value={value} />
            <Label htmlFor={id} content="Mostrar Eventos" />
        </>

    )
}


export default Input