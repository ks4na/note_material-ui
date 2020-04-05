import React from 'react'
import { Typography } from '@material-ui/core'
import {
  Switch,
  useRouteMatch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom'
import BasicDemo from './ThemeProviderBasicDemo'
import UseThemeDemo from './AccessingTheThemeInComponents/UseThemeDemo'
import WithThemeDemo from './AccessingTheThemeInComponents/withThemeDemo'
import ThemeNestingDemo from './ThemeNesting'
import OverridingStylesDemo from './OverridingStyles/Parent'
import CSSInjectionOrderDemo from './CSSInjectionOrder'

export default function StyleSystemAdvanced(): JSX.Element {
  const match = useRouteMatch()
  return (
    <>
      <Typography variant="h3">Advanced Style System</Typography>
      <ul>
        <li>
          <NavLink to={`${match.url}/basic-demo`}>basic demo</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/usetheme-hook-demo`}>
            useTheme hook demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/withtheme-hoc-demo`}>
            withTheme HOC demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/theme-nesting-demo`}>
            theme nesting demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/overriding-styles-demo`}>
            overriding styles - classes props
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css-injection-order-demo`}>
            CSS Injection Order demo
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/basic-demo`} component={BasicDemo} />
        <Route
          path={`${match.path}/usetheme-hook-demo`}
          component={UseThemeDemo}
        />
        <Route
          path={`${match.path}/withtheme-hoc-demo`}
          component={WithThemeDemo}
        />
        <Route
          path={`${match.path}/theme-nesting-demo`}
          component={ThemeNestingDemo}
        />
        <Route
          path={`${match.path}/overriding-styles-demo`}
          component={OverridingStylesDemo}
        />
        <Route
          path={`${match.path}/css-injection-order-demo`}
          component={CSSInjectionOrderDemo}
        />
        <Redirect to={`${match.path}`} />
      </Switch>
    </>
  )
}
