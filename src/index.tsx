import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@material-ui/core'

import App from './App'

// import roboto font
import 'typeface-roboto'

// import axios config
import '../axios.config'

import { BrowserRouter } from 'react-router-dom'

function AppWrapper(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<AppWrapper />, document.querySelector('#app'))
