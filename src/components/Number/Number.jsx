import React, { useState } from 'react'
import style from "./Number.module.css"
import { TbHandFinger } from "react-icons/tb";

const Number = ({selected, setselected}) => {

    const Numbers= [1,2,3,4,5,6];

    
    
    function handleClick({index}) {
      console.log(index)
        setselected(index);
    }

  return (
    <div className={style.numcontainer}>
      <ul className={style.items}>
        {Numbers.map((Number, index) => 
        <li 
        key={index}
        className={selected === index ? style.primary : style.secondary}
        onClick={() => handleClick({index})}
        >{Number}</li>
        ) }
      </ul>
      <p>Select number here<TbHandFinger style={{fontSize: "1.5rem"}} /></p>
    </div>
  )
}
export default Number;
