import React from "react";
import './styles.css'
import PlayerX from '../../img/player-x.png'
import PlayerO from '../../img/player-o.png'

const Player = () => {
    return (
        <button className="player">
            <img src={PlayerX} alt="jogadorX"></img>
        </button>
    )
}

export default Player;