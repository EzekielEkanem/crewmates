import { useState, useEffect } from 'react'
import playerLogo from './assets/FIFA_2023_home.webp'
import viteLogo from '/vite.svg'
import { supabase } from "./client.jsx";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  let addedRatings = 0

  const forwards = posts.filter((post) => (post.position == "striker") || (post.position == "centre forward") || (post.position == "winger"))
  const numForwards = ((forwards.length / posts.length) * 100).toFixed(2)

  const midfielders = posts.filter((post) => (post.position == "defensive midfielder") || (post.position == "centre midfielder") || (post.position == "attacking midfielder"))
  const numMidfielders = ((midfielders.length / posts.length) * 100).toFixed(2)

  const defenders = posts.filter((post) => (post.position == "full-back") || (post.position == "wing-back") || (post.position == "centre-back"))
  const numDefenders = ((defenders.length / posts.length) * 100).toFixed(2)

  for (const post of posts) {
    addedRatings += parseInt(post.rating, 10)
  }
  const chanceOfSuccess = ((addedRatings / 1100) * 100).toFixed(2)

    useEffect(() => {
        const readPlayer = async () => {
            const {data, error} = await supabase.from("Players").select();
            setPosts(data)
        } 
        readPlayer().catch(console.error)
    }, [supabase]);

  return (
    <div className="App">
      <h1>Welcome to the Player Creator!</h1>
      <h3>Here is where you can create your very own set of players before sending them into the field</h3>
      <div className='form-container'>
        <div className='mini-container'>
          <h3>Strikers</h3>
          <p>{numForwards}%</p>
        </div>
        <div className='mini-container'>
          <h3>Midfielders</h3>
          <p>{numMidfielders}%</p>
        </div>
        <div className='mini-container'>
          <h3>Defenders</h3>
          <p>{numDefenders}%</p>
        </div>
      </div>
      <div className='mini-container'>
        <h3>Chances of winning against any opponent</h3>
        <p>{chanceOfSuccess}%</p>
      </div>
      <img src={playerLogo} alt="Player Creator" width="700px" height="500px" />
    </div>
  )
}

export default App
