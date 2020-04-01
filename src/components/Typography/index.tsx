import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TypographyKeyInTheme from './typographyKeyInTheme'
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  NavLink,
} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    '& .typoHeading': {
      wordBreak: 'break-all',
    },
  },
})

export default function TypographyDemo(): JSX.Element {
  const classes = useStyles()
  const match = useRouteMatch()

  return (
    <>
      <ul>
        <li>
          <NavLink to={`${match.url}/typographyKeyInTheme`}>
            DMEO: typography key in theme
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route
          path={`${match.path}/typographyKeyInTheme`}
          component={TypographyKeyInTheme}
        />
        <Route path={`${match.path}/`} exact>
          <div className={classes.root}>
            <div className="typoHeading">
              <TypoHeading />
            </div>
            <div className="typoBody">
              <TypoBody />
            </div>
            <div className="others">
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </div>
          </div>
        </Route>
        <Redirect to={`${match.path}`} />
      </Switch>
    </>
  )
}

function TypoHeading(): JSX.Element {
  return (
    <>
      <Typography color="textPrimary" variant="h1" component="h2" gutterBottom>
        This is H1 Headingaverylongword
      </Typography>
      <Typography color="textPrimary" variant="h2" gutterBottom>
        This is H2 Headingaverylongword
      </Typography>
      <Typography color="textPrimary" variant="h3" gutterBottom>
        This is H3 Headingaverylongword
      </Typography>
      <Typography color="textPrimary" variant="h4" gutterBottom>
        This is H4 Headingaverylongword
      </Typography>
      <Typography color="textPrimary" variant="h5" gutterBottom>
        This is H5 Headingaverylongwordingaverylongword
      </Typography>
      <Typography color="textPrimary" variant="subtitle1" gutterBottom>
        h6 - subtitle1. Lorem ipsum dolor sit ametasdfsdonsectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
      <Typography color="textPrimary" variant="subtitle2" gutterBottom>
        h6 - subtitle2. Lorem ipsum dolor sit ametasdfsdonsectetur adipisicing
        elit. Quos blanditiis tenetur
      </Typography>
    </>
  )
}

function TypoBody(): JSX.Element {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        body typo
      </Typography>
      <Typography variant="body1" gutterBottom>
        p - body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        p - body2.
        郭明錤引用先前的预测称苹果最快将在2020年第四季度至2021年第一季度推出采用ARM处理器的MacBook机型，
        同时他表示Mac产品线将迎来结构性改变：预期2021年将有许多Mac产品，包括笔记本电脑与桌面PC，
        都将采用苹果自家ARM处理器，因而Mac产品的体积有望因此而产生变化。
      </Typography>
    </>
  )
}
