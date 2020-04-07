import React from 'react'
import {
  useRouteMatch,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Box, Link } from '@material-ui/core'
import BoxDemo from './Box'
import ContainerDemo from './Container'
import GridDemo from './Grid'
import GridListDemo from './GridList'
import HiddenDemo from './Hidden'

export default function ComponentsIndex(): JSX.Element {
  const match = useRouteMatch()

  return (
    <Box>
      <ul>
        <li>
          <Link component={NavLink} to={`${match.url}/box`}>
            Box
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${match.url}/container`}>
            Container
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${match.url}/grid`}>
            Grid
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${match.url}/gridlist`}>
            GridList
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${match.url}/hidden`}>
            Hidden
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/box`} component={BoxDemo} />
        <Route path={`${match.path}/container`} component={ContainerDemo} />
        <Route path={`${match.path}/grid`} component={GridDemo} />
        <Route path={`${match.path}/gridlist`} component={GridListDemo} />
        <Route path={`${match.path}/hidden`} component={HiddenDemo} />
        <Redirect to={`${match.path}`} />
      </Switch>
    </Box>
  )
}
