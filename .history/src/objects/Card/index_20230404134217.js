import React from "react";
import './styles.css'

const Card = (props) => {
    console.log(props.children)

    return (
        <article className="card">
            {props.children}
        </article>
    )
}

export default Card