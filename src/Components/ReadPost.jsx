import React, { useState, useEffect } from 'react';
import { supabase } from "../client.jsx";
import Card from './Card';

const ReadPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const readPlayer = async () => {
            const {data, error} = await supabase.from("Players").select();
            setPosts(data)
        } 
        readPlayer().catch(console.error)
    }, [supabase]);

    const createPlayer = (event) => {
        event.preventDefault();
        window.location = "/CreatePost"
    }
    
    return (
        <div className="App">
            <h1>Your Player Gallery!</h1>
            <div className='Card-container'>
                {
                    posts && posts.length > 0 ? 
                    posts.map((post,index) => 
                    <Card id={post.id} name={post.name} rating={post.rating} position={post.position}/>
                    ) : 
                    <div>
                        <h2>{'You have not made a Player Yet!'}</h2>
                        <button className='button' onClick={createPlayer}>Create One here!</button>
                    </div>
                }
            </div>
        </div>  
    )
}

export default ReadPosts;