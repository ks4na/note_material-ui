import React from 'react'
import { Checkbox } from '@material-ui/core'
import {
  makeStyles,
  Theme,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status?: {
      danger?: string
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme?.status?.danger,
    '&$checked': {
      color: theme?.status?.danger,
    },
  },
  // stylelint-disable-next-line block-no-empty
  checked: {},
}))

export default function CustomVariables(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CustomedCheckBox />
    </ThemeProvider>
  )
}

function CustomedCheckBox(): JSX.Element {
  const classes = useStyles()
  return (
    <Checkbox
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}
