import React from "react";
import './styles.css'

const Card = ({children}) => {
    return (
        <article className="card">
            {props.children}
        </article>
    )
}

export default Card