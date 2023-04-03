import React from "react";
import './styles.css'
import PlayerX from '../../img/player-x.png'
import PlayerO from '../../img/player-o.png'

const Player = (props) => {
    const players = []
    players['x'] = PlayerX
    players['o'] = PlayerO


    return (
        <button className="player">
            <img src={players[props.player]} alt={`Jogador X ${props.player}`}></img>
        </button>
    )
}

export default Player;