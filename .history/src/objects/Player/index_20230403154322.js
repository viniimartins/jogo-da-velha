import React from "react";
import './styles.css'
import PlayerX from '../../img/player-x.png'

const Player = () => {
    return (
        <button className="player">
            <img src={playerX} alt="jogadorX"></img>
        </button>
    )
}

export default Player;