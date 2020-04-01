import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
})

export default function HookApiButton(): JSX.Element {
  const classes = useStyles()
  return <Button className={classes.root}>styled with hoook api</Button>
}
