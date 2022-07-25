import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import News from './News'

function App() {
  const [state, setState] = useState([])

  const url = "https://api.spaceflightnewsapi.net/v3/articles"

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState(data))
    
  }, [])

  const newsElement = state.map(item => {
    return <News data={item} key={nanoid()}/>
  })
  

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
     <div className="newsContainer">
          {newsElement}
      </div> 
    </div>
  )
}

export default App
