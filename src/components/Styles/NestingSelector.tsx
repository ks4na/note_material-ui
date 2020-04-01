import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    color: 'red',
    '& > p': {
      color: 'blue',
      '& > span': {
        color: 'green',
      },
    },
  },
})

export default function NestingSelector(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {'text inside .root'}
      <p>
        {'text inside .root > p'} <br />
        <span>{'text inside .root > p > span'}</span>
      </p>
    </div>
  )
}
