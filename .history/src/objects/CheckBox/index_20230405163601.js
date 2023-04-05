import React from "react";


const CheckBox = ({id = "", value = "", content = ""}) => {
    return (

        <>
            <Input id="show" value="show" content="Mostrar eventos" type="checkbox" />
            <Label htmlFor={id} content={content}
        </>


    )
}