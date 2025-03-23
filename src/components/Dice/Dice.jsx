import React, { useState } from 'react'
import dice1 from "../../assets/image/dice_1.png"
import dice2 from "../../assets/image/dice_2.png"
import dice3 from "../../assets/image/dice_3.png"
import dice4 from "../../assets/image/dice_4.png"
import dice5 from "../../assets/image/dice_5.png"
import dice6 from "../../assets/image/dice_6.png"
import Button from "../Button/Button"
import style from "./Dice.module.css"

const Dice = () => {
  const dices= [dice1, dice2, dice3, dice4, dice5, dice6]
  const [roll, setroll] = useState(dice6)
  
  function spin() {
    const randomNum = Math.floor(Math.random() * 6)
    console.log(randomNum)
    setroll(() => dices[randomNum])
  }

  return (
    <div>
      <div className={`container ${style.dice}`}>
        <img onClick={spin} src={roll} alt="" />
        <h1>Click on Dice to roll</h1>
        <div className={style.btns}>
            <Button text="Reset Score" btnOutline={true}/>
            <Button text="Show Rules" />
        </div>
      </div>
    </div>
  )
}

export default Dice;
