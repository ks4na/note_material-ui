import React from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    color: theme.palette.secondary.main,
  },
}))

export default function BoxDemo(): JSX.Element {
  const classes = useStyles()
  return (
    <>
      <Box>Mui Box: basic</Box>
      <Box component="span">Mui Box: component=&quot;span&quot;</Box>
      <Box clone className={classes.btn}>
        <Button>Mui Box with a child node Button</Button>
      </Box>
    </>
  )
}
