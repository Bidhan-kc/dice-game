import React, { useState } from 'react'
import Startgame from './components/Startgame/Startgame'
import Playgame from './components/Playgame/Playgame'

const App = () => {

  const [isGameStarted, setisGameStarted] = useState(true)

  const toggle = () => {
    setisGameStarted((props) =>!props)
  }


  return (
    <div>
      {isGameStarted ? <Playgame /> : <Startgame toggle={toggle} />}
    </div>
  )
}

export default App
