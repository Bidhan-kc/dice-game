import React, { useState } from 'react'
import diceImages from '../image'
import Button from "../Button/Button"
import style from "./Dice.module.css"

const Dice = ({roll, spin}) => {
  



  return (
    <div>
      <div className={`container ${style.dice}`}>
        <img 
        onClick={spin} 
        src={roll} 
        />
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
