import React from 'react'
import styles from './App.scss'
import { Button, Tooltip } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import QQLogin from './components/QQLogin.jsx'
import QQLoginCallback from './components/QQLoginCallback.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      
      <div>
        <h2 className={styles.header}>test Material UI</h2>

        <Tooltip title="Add" placement="top">
          <Button variant="contained" startIcon={<DeleteIcon />}>
            Talk
          </Button>
        </Tooltip>
        <Route exact path="/" component={QQLogin}></Route>
        <Route path="/qqLoginCallback" component={QQLoginCallback}></Route>
      </div>
    </BrowserRouter>
  )
}
