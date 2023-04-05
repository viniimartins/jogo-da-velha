import React from "react";
import Label from "../Label";

const Input = ({ id, value }) => {
    return (
        <>
            <input id={id} type="checkbox" value={value} />
            <Label htmlFor="show" content="Mostrar Eventos" />
        </>

    )
}


export default Input