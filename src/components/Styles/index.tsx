import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  NavLink,
} from 'react-router-dom'
import StressTest from './StressTest'
import HookAPI from './HookAPI'
import StyledComponentsAPI from './StyledComponentsAPI'
import HOCAPI from './HocApi'
import NestingSelector from './NestingSelector'
import HookWithProps from './AdaptingBasedOnProps/HookApi'
import StyledComponentsWithProps from './AdaptingBasedOnProps/StyledComponentApi'
import HocWithProps from './AdaptingBasedOnProps/HocApi'

export default function StylesSystem(): JSX.Element {
  const match = useRouteMatch()
  return (
    <>
      <ul>
        <li>
          <NavLink to={`${match.url}/hook`}>hook api demo</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/styled`}>
            styled component api demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/hoc`}>HOC api demo</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/nesting-selector`}>
            nesting selector demo
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/hook-with-props`}>
            adapting based on props - hook api
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/styled-with-props`}>
            adapting based on props - styled components api
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/hoc-with-props`}>
            adapting based on props - HOC api
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/stress-test`}>stress test demo</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/stress-test`} component={StressTest} />
        <Route path={`${match.path}/hook`} component={HookAPI} />
        <Route path={`${match.path}/styled`} component={StyledComponentsAPI} />
        <Route path={`${match.path}/hoc`} component={HOCAPI} />
        <Route
          path={`${match.path}/nesting-selector`}
          component={NestingSelector}
        />
        <Route
          path={`${match.path}/hook-with-props`}
          component={HookWithProps}
        />
        <Route
          path={`${match.path}/styled-with-props`}
          component={StyledComponentsWithProps}
        />
        <Route path={`${match.path}/hoc-with-props`} component={HocWithProps} />
        <Redirect to={`${match.path}`} />
      </Switch>
    </>
  )
}
