import React from "react";
import Card from "../../objects/Card"
import Player from "../../objects/Player";

const Hashtag = () => {
    return (
        <Card>
            <ul className="hashtag">
                <li><Player player='o' /></li>
            <Player player='x' />
                <li> </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

            </ul>

            <Player player='o' />

            <Player player='o' />
            <Player player='x' />
            <Player player='o' />

            <Player player='x' />
            <Player player='o' />
            <Player player='o' />
        </Card>
    )

}

export default Hashtag