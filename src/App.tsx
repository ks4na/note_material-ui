import React from 'react'
import styles from './App.css'
import logo from '../assets/imgs/google.png'
import axios from 'axios'

export default function App(): JSX.Element {
  return (
    <>
      <h1 className={styles.h1}>App.tsx</h1>
      <p>axios.defaults.baseUrl: {axios.defaults.baseURL}</p>
      <img src={logo} alt="" />
    </>
  )
}
