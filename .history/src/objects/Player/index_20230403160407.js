import React from "react";
import './styles.css'
import PlayerX from '../../img/player-x.png'
import PlayerO from '../../img/player-o.png'

const Player = (props) => {
    return (
        <button className="player">
            <img src={PlayerO} alt="jogadorX"></img>
        </button>
    )
}

export default Player;