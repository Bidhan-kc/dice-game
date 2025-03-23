import React from 'react'
import style from "./Playgame.module.css"
import Score from '../Score/Score';
import Number from '../Number/Number';
import Dice from '../Dice/Dice';

const Playgame = () => {
  return (
    <div>
        <div className={`container ${style.top}`}>
            <Score />
            <Number />
        </div>
        <Dice />
    </div>
  )
}

export default Playgame;