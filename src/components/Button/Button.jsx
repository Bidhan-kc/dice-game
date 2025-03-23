import React from 'react'
import style from "./Button.module.css"

const Button = ({toggle, text, btnOutline}) => {
  return (
    <div>
        <button className= {btnOutline ? style.secondary : style.primary} onClick={toggle}>
            {text}
        </button>
    </div>
  )
}

export default Button
