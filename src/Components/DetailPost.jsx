import React from 'react'
import { useState, useEffect, Components } from 'react'
import player from '../assets/FIFA_player.jpeg'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../client.jsx'

const DetailPost = () =>  {
    let params = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const readPlayer = async () => {
            const {data, error} = await supabase.from("Players").select().eq("id", params.id);
            setPosts(data)
        } 
        readPlayer().catch(console.error)
    }, [supabase]);

    const updatePlayer = async (event) => {
      event.preventDefault();
      window.location = `/UpdatePost/${params.id}`
    }
  
    return ( 
      <div>
        {
            posts.length > 0 ? 
            <div>
                <h1>Player: {posts[0].name}</h1>
                <h1>Stats:</h1>
                <p>Rating: {posts[0].rating}</p>
                <p>Position: {posts[0].position}</p>
                {(parseInt(posts[0].rating, 10) > 80) ? <p>Wow! Your Player is super good</p>
                : <p>Your player rating isn't good enough. Would you mind editing?</p>}
                <button className='button' onClick={updatePlayer}>Wanna edit this Player?</button> <br />
                <img alt="player" src={player} width="150px" height="150px"/>
            </div> : null
        }
      </div>
    );
  };
  
  export default DetailPost;