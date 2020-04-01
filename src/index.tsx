import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import App from './App'

// import roboto font
import 'typeface-roboto'

// import axios config
import '../axios.config'

import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import rootReducer from './models/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// 添加 redux-devtools 功能
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers()
  // other store enhancers if any
)

function AppWrapper(): JSX.Element {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ThemeWrapper />
        </BrowserRouter>
      </ReduxProvider>
    </>
  )
}

function ThemeWrapper(): JSX.Element {
  const theme = useSelector(({ theme }) => theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<AppWrapper />, document.querySelector('#app'))
