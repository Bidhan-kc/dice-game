import React from 'react'
import style from "./Startgame.module.css"
import dice from "../../assets/image/dices 1.png"
import Button from '../Button/Button'

const Startgame = ({toggle}) => {
  return (
    <div className={`container ${style.col_2}`}>
      <div className={style.col_left}>
        <img src={dice} alt="" />
      </div>
      <div className={style.col_right}>
        <h1>DICE GAME</h1>
        <Button toggle={toggle} text="Play Now" />
      </div>
    </div>
  )
}

export default Startgame;