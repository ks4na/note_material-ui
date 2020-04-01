import { combineReducers } from 'redux'
import theme, { ThemeState } from './themeReducer'

declare module 'react-redux' {
  interface DefaultRootState {
    theme: ThemeState
  }
}

export default combineReducers({ theme })
