import React from 'react'
import {
  Switch,
  useRouteMatch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom'

import CustomVariables from './CustomVariables'
import CSSMediaQueries from './CSSMediaQueries'
import JSMediaQueries from './JSMediaQueries'

export default function CustomizationTheme(): JSX.Element {
  const match = useRouteMatch()
  return (
    <>
      <ul>
        <li>
          <NavLink to={`${match.url}/theme-custom-variables`}>
            Theme Custom Variables
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css-media-queries`}>
            CSS media queries
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/js-media-queries`}>
            JavaScript media queries
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route
          path={`${match.path}/theme-custom-variables`}
          component={CustomVariables}
        />
        <Route
          path={`${match.path}/css-media-queries`}
          component={CSSMediaQueries}
        />
        <Route
          path={`${match.path}/js-media-queries`}
          component={JSMediaQueries}
        />
        <Redirect to={`${match.path}`} />
      </Switch>
    </>
  )
}
