import React, { useState } from 'react'
import styles from './regist.module.css'
import Input from './input/Input'
import { registration } from '../../redux/actions'

function Registration(props) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
 return (
   <div className={styles.registation}>
     <div>Регистрация</div>
     <Input value={email} setValue={setEmail} type='text' placeholder='name'/>
     <Input value={pass} setValue={setPass} type='password' placeholder='password'/>
     <button onClick={() => registration(email, pass)}> Войти</button>
   </div>
 );
}

export default Registration;
