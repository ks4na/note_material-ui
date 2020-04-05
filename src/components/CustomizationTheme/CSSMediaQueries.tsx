import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: 'red',
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'orange',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundColor: 'green',
      },
    },
  }
})

export default function CSSMediaQueries(): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>xs,sm: red</p>
      <p>md: orange</p>
      <p>lg: green</p>
    </div>
  )
}
