import React from 'react'
import { useState } from 'react'
import player from '../assets/FIFA_player.jpeg'
import { Link } from 'react-router-dom'
import { supabase } from '../client.jsx'


const Card = (props) =>  {
  const updatePlayer = async (event) => {
    event.preventDefault();
    window.location = `/UpdatePost/${props.id}`
  }

  return (
    <div>
        <div className="Card">
          <Link to={`/DetailPost/${props.id}`}><img alt="player" src={player} width="150px" height="150px"/></Link>
          <Link to={`/DetailPost/${props.id}`}><p>Player Name: <span>{props.name}</span></p></Link>
          <Link to={`/DetailPost/${props.id}`}><p>Player Rating: <span>{props.rating}</span></p></Link>
          <Link to={`/DetailPost/${props.id}`}><p>Player Position: <span>{props.position}</span></p></Link>
          <button onClick={updatePlayer} className="button">Edit Crewmate</button>
        </div>
    </div>
  );
};

export default Card;