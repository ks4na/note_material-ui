import React from 'react'
import {
  Switch,
  Route,
  Redirect,
  NavLink,
  useRouteMatch,
} from 'react-router-dom'
import StyleFunctionsDemo from './StyleFunctionsDemo'
import StyledCompWithTheme from './StyledCompWithTheme'
import CustomStyleFunctionDemo from './CustomStyleFunction'
import VariantDemo from './VariantDemo'
import Banner from './RealWorld'
import BordersDemo from './BordersDemo'

export default function System(): JSX.Element {
  const match = useRouteMatch()

  return (
    <>
      <ul>
        <li>
          <NavLink to={`${match.url}/style-functions-demo`}>
            style functions demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/styled-comp-using-theme`}>
            styled component using theme
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/custom-style-function`}>
            custom style function
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/variant`}>variant</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/real-world`}>real world - Banner</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/borders`}>Borders</NavLink>
        </li>
      </ul>
      <Switch>
        <Route
          path={`${match.path}/style-functions-demo`}
          component={StyleFunctionsDemo}
        />
        <Route
          path={`${match.path}/styled-comp-using-theme`}
          component={StyledCompWithTheme}
        />
        <Route
          path={`${match.path}/custom-style-function`}
          component={CustomStyleFunctionDemo}
        />
        <Route path={`${match.path}/variant`} component={VariantDemo} />
        <Route path={`${match.path}/real-world`} component={Banner} />
        <Route path={`${match.path}/borders`} component={BordersDemo} />
        <Redirect to={`${match.path}`} />
      </Switch>
    </>
  )
}
