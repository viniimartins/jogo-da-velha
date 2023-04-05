import React from "react";
import './styles.css'

const Label = ({ htmlFor, content }) => {
    return (
        <label className="label" htmlFor="">{content}</label>
    )

}

export default Label