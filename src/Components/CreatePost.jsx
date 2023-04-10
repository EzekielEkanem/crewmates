import React from 'react';
import { useState } from 'react'
import playerLogo from '../assets/FIFA_2023_home.webp'
import { supabase } from "../client.jsx";

const CreatePost = () => {
    const [position, setPosition] = useState("")

    const createPost = async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const plyPosition = position;

        const players = {
            name: name,
            rating: rating,
            position: plyPosition
        }
        if (((players.position == "goalkeeper") || (players.position == "full-back") || (players.position == "wing-back") || (players.position == "centre-back")) && (players.rating > 80)) {
            alert("A goalkeeper or defender cannot have a rating higher than 80")
        } else if (((players.position == "defensive midfielder") || (players.position == "centre midfielder") || (players.position == "attacking midfielder")) && (players.rating > 90)) {
            alert("A midfielder cannot have a rating higher than 90")
        } else if (((players.position == "winger") || (players.position == "centre forward") || (players.position == "striker")) && (players.rating < 70)) {
            alert("A forward cannot have a rating less than 70")
        } else {
            await supabase
            .from('Players')
            .insert(players)
            .select();
            alert("Your Player has been successfully created")
            window.location = "/CreatePost"
        }
    }

    return (
        <div className="App">
            <h1>Create a New Player</h1>
            <img src={playerLogo} alt="Player Creator" width="100px" height="100px" />

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

            <form>   
                <input onClick={createPost} className='button' type="submit" value="Create Player" />
            </form>
        </div>
    )
}

export default CreatePost