import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'orange',
  },
  label: {
    color: 'red',
  },
})

export interface NestedCompProps {
  classes?: {
    root?: string
    label?: string
  }
}

export function UseStylesNestedComp({
  classes: classesProps,
}: NestedCompProps): JSX.Element {
  const classes = useStyles({ classes: classesProps })
  return (
    <div className={classes.root}>
      <span className={classes.label}>UseStylesNestedComp</span>
    </div>
  )
}

function NestedComp({ classes }: NestedCompProps): JSX.Element {
  return (
    <div className={classes?.root || ''}>
      <span className={classes?.label || ''}>UseStylesNestedComp</span>
    </div>
  )
}

const styles = {
  root: {
    backgroundColor: 'orange',
  },
  label: {
    color: 'red',
  },
}

export const WithStylesNestedComp = withStyles(styles)(NestedComp)
