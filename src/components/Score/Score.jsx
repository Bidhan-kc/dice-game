import React from 'react'
import style from "./Score.module.css"

const Score = () => {
  return (
    <div className={style.score}>
      <h1>0</h1>
      <p>Total score</p>
    </div>
  )
}

export default Score
