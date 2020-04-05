import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
      textAlign: 'center',
      width: '80%',
      margin: '0 auto',
    },
  })
)

export default function TypographyKeyInTheme(): JSX.Element {
  const classes = useStyles()
  return <div className={classes.root}>{'This div looks like a button.'}</div>
}
