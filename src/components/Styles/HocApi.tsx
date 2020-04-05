import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}

function HocAPI({ classes }: WithStyles<typeof styles>): JSX.Element {
  return <Button className={classes.root}>styled with HOC api</Button>
}

export default withStyles(styles)(HocAPI)
