import React from 'react'
import styles from './App.css'
import logo from '../assets/imgs/google.png'
import axios from 'axios'
import { Button, Checkbox, useTheme, Box } from '@material-ui/core'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import TypographyDemo from './components/Typography'
import StylesSystemDemo from './components/Styles'
import AdvancedStyleSystemDemo from './components/Styles/AdvancedStyleSystem'
import ThemeCustomizationDemo from './components/CustomizationTheme'

import { useDispatch } from 'react-redux'
import { alterThemeType } from './models/actions'

export default function App(): JSX.Element {
  const theme = useTheme()
  const dispatch = useDispatch()

  const handleClick = function(): void {
    const currentThemeType = theme.palette.type
    dispatch(alterThemeType(currentThemeType === 'light' ? 'dark' : 'light'))
  }

  return (
    <Box style={{ backgroundColor: theme.palette.background.default }}>
      <h1 className={styles.h1}>App.tsx</h1>
      <p>axios.defaults.baseUrl: {axios.defaults.baseURL}</p>
      <img src={logo} alt="" />
      <Button color="primary" onClick={handleClick}>
        hello world
      </Button>
      <Checkbox defaultChecked />
      <ul>
        <li>
          <NavLink to="/typography">typography demo</NavLink>
        </li>
        <li>
          <NavLink to="/styles">styles system - Basic</NavLink>
        </li>
        <li>
          <NavLink to="/styles/advanced">styles system - Advanced</NavLink>
        </li>
        <li>
          <NavLink to="/theme-customization">theme customization</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/typography" component={TypographyDemo} />
        <Route path="/styles/advanced" component={AdvancedStyleSystemDemo} />
        <Route path="/styles" component={StylesSystemDemo} />
        <Route path="/theme-customization" component={ThemeCustomizationDemo} />
        <Redirect to="/" />
      </Switch>
    </Box>
  )
}
