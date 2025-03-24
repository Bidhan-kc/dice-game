import React from 'react'
import style from "./Score.module.css"

const Score = ({score}) => {
  return (
    <div className={style.score}>
      <h1>{score}</h1>
      <p>Total score</p>
    </div>
  )
}

export default Score
