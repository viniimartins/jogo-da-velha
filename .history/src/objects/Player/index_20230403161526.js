import React from "react";
import './styles.css'
import PlayerX from '../../img/player-x.png'
import PlayerO from '../../img/player-o.png'

const Player = (props) => {
    console.log(props.player)

    let player = "";
    if(props.players === 'x'){
        player = PlayerX
    } else if (props.players === 'o'){
        player = PlayerO
    }

    return (
        <button className="player">
            <img src={player} alt="jogadorX"></img>
        </button>
    )
}

export default Player;