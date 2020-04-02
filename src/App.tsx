import React from 'react'
import styles from './App.css'
import logo from '../assets/imgs/google.png'
import axios from 'axios'
import { Button, Checkbox, useTheme, Box, Link } from '@material-ui/core'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import TypographyDemo from './components/Typography'
import StylesSystemDemo from './components/Styles'
import AdvancedStyleSystemDemo from './components/Styles/AdvancedStyleSystem'
import ThemeCustomizationDemo from './components/CustomizationTheme'
import SystemIndex from './components/System'

import { useDispatch } from 'react-redux'
import { alterThemeType } from './models/actions'

export default function App(): JSX.Element {
  const theme = useTheme()
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    const currentThemeType = theme.palette.type
    dispatch(alterThemeType(currentThemeType !== 'dark' ? 'dark' : 'light'))
  }, [dispatch, theme.palette.type])

  return (
    <Box>
      <Box overflow="hidden">
        <h1 className={styles.h1}>App.tsx</h1>
        <p>axios.defaults.baseUrl: {axios.defaults.baseURL}</p>
        <img src={logo} alt="" />
        <Button color="primary" onClick={handleClick}>
          toggle theme
        </Button>
        <Checkbox defaultChecked />
      </Box>
      <ul>
        <li>
          <Link component={NavLink} to="/typography">
            typography demo
          </Link>
        </li>
        <li>
          <Link component={NavLink} to="/styles">
            styles system - Basic
          </Link>
        </li>
        <li>
          <Link component={NavLink} to="/styles/advanced">
            styles system - Advanced
          </Link>
        </li>
        <li>
          <Link component={NavLink} to="/theme-customization">
            theme customization
          </Link>
        </li>
        <li>
          <Link component={NavLink} to="/system">
            system
          </Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/typography" component={TypographyDemo} />
        <Route path="/styles/advanced" component={AdvancedStyleSystemDemo} />
        <Route path="/styles" component={StylesSystemDemo} />
        <Route path="/theme-customization" component={ThemeCustomizationDemo} />
        <Route path="/system" component={SystemIndex} />
        <Redirect to="/" />
      </Switch>
    </Box>
  )
}
