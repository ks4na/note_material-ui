import React from 'react'
import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles'

interface ThemeType {
  bgColor: string
  color: string
}

const theme: ThemeType = {
  bgColor: 'orange',
  color: 'green',
}

export default function BasicDemo(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BasicDemoChild />
    </ThemeProvider>
  )
}

function BasicDemoChild(): JSX.Element {
  const useStyles = makeStyles((theme: ThemeType) =>
    createStyles({
      root: {
        backgroundColor: theme.bgColor,
        color: theme.color,
        padding: '20px 0',
      },
    })
  )
  const classes = useStyles()
  return <div className={classes.root}>This is BasicDemoChild</div>
}
