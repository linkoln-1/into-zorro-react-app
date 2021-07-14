import React from 'react'
import style from './Input.module.css'

function Input (props) {
  return (
    <input
      type={props.type}
            placeholder={props.placeholder}
           value={props.value}
           onChange={(event) => props.setValue(event.target.value)}
    />
  )
}

export default Input