import React, {useState} from 'react'
import style from "./Playgame.module.css"
import Score from '../Score/Score';
import Number from '../Number/Number';
import Dice from '../Dice/Dice';
import diceImages from '../image'

const Playgame = () => {
  const [roll, setroll] = useState(diceImages[5]);
  const [selected, setselected] = useState();
  const [score, setscore] = useState(0)

    function spin() {
      if(!selected) {return}
      const randomNum = Math.floor(Math.random() * 6)
      console.log(randomNum)
      setroll(diceImages[randomNum])


      if (selected === randomNum) {
        setscore((prevValue) => prevValue + randomNum)
      } else {
        setscore((prevValue) => prevValue - 2)
      }

      setselected()
    }


  
 
  return (
    <div>
        <div className={`container ${style.top}`}>
            <Score score={score}/>
            <Number selected={selected} setselected={setselected}/>
        </div>
        <Dice roll={roll} spin={spin}/>
    </div>
  )
}

export default Playgame;