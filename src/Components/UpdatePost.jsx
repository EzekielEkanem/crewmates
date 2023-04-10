import React, { useState, useEffect } from 'react';
import playerLogo from '../assets/FIFA_2023_home.webp';
import { useParams } from "react-router-dom";
import { supabase } from "../client.jsx";

const UpdatePost = () => {
    let params = useParams();
    const [posts, setPosts] = useState([]);
    const [position, setPosition] = useState("");

    useEffect(() => {
        const readPlayer = async () => {
            const {data, error} = await supabase.from("Players").select().eq("id", params.id);
            setPosts(data)
        } 
        readPlayer().catch(console.error)
    }, [supabase]);

    const updatePost = async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const plyPosition = position;

        const players = {
            name: name,
            rating: rating,
            position: plyPosition
        }

        await supabase.from('Players').update({ name: players.name, rating: players.rating, position: players.position })
        .eq('id', params.id);

        alert("Your Player has been successfully updated")
        window.location = `/UpdatePost/${params.id}`;
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase.from('Players').delete().eq('id', params.id);

        alert("Your Player has been successfully deleted")
        window.location = "/ReadPost";
    }

    return (
        <div>
            <h1>Update Your Player 😊</h1>
            <img src={playerLogo} alt="Player Creator" width="200px" height="200px" />
            <h3>Current Player Info:</h3>
            {posts.length > 0 ? <h4>Name: {posts[0].name}, Rating: {posts[0].rating}, Position: {posts[0].position}</h4> : null}
            <div className='form-container'>
                <form className='mini-container'>
                    <label for="name">Name:</label> <br />
                    <input type="text" id="name" name="name" placeholder='Enter player name' /><br />
                </form> 

                <form className='mini-container'>
                    <label for="rating">Rating:</label><br />
                    <input type="text" id="rating" name="rating" placeholder='Enter player rating' /><br />
                </form>

                <form className='mini-container'>
                    <p>Player Position</p>
                    <label for="goalkeeper">Goalkeeper</label>
                    <input type="radio" id="goalkeeper" name="ply_position" value="goalkeeper" onChange={(e) => setPosition(e.target.value)} />
                    <br />
                    
                    <label for="ful-back">Full-Back</label>
                    <input type="radio" id="full-back" name="ply_position" value="full-back" onChange={(e) => setPosition(e.target.value)} />
                    <br />
                    
                    <label for="wing-back">Wing-Back</label>
                    <input type="radio" id="wing-back" name="ply_position" value="wing-back" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="centre-back">Centre-Back</label>
                    <input type="radio" id="centre-back" name="ply_position" value="centre-back" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="defensive midfielder">Defensive Midfielder</label>
                    <input type="radio" id="defensive midfielder" name="ply_position" value="defensive midfielder" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="centre midfielder">Centre Midfielder</label>
                    <input type="radio" id="centre midfielder" name="ply_position" value="centre midfielder" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="attacking midfielder">Attacking Midfielder</label>
                    <input type="radio" id="attacking midfielder" name="ply_position" value="attacking midfielder" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="winger">Winger</label>
                    <input type="radio" id="winger" name="ply_position" value="winger" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="centre forward">Centre Forward</label>
                    <input type="radio" id="centre forward" name="ply_position" value="centre forward" onChange={(e) => setPosition(e.target.value)} />
                    <br />

                    <label for="striker">Striker</label>
                    <input type="radio" id="striker" name="ply_position" value="striker" onChange={(e) => setPosition(e.target.value)} />
                    <br />
                </form>
            </div>
            <button onClick={updatePost} className="button">Update Player</button>
            <button onClick={deletePost} className="button">Delete Player</button>
        </div>
    )
}

export default UpdatePost;