import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles'

export interface MyTheme {
  background: string
}

export default function ThemeNestingDemo(): JSX.Element {
  return (
    <ThemeProvider
      theme={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      }}
    >
      <Component>Button using outer theme</Component>
      <ThemeProvider
        theme={(outerTheme): MyTheme => ({
          ...outerTheme,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        })}
      >
        <Component>Button using inner theme</Component>
      </ThemeProvider>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: MyTheme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}))

export interface ComponentProps {
  children: React.ReactNode
}

function Component({ children }: ComponentProps): JSX.Element {
  const classes = useStyles()
  return (
    <button type="button" className={classes.root}>
      {children}
    </button>
  )
}
