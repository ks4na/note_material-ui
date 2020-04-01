import React from 'react'
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { Omit } from '@material-ui/types'

const useStyles = makeStyles({
  root: {
    color: '#fff',
    background: (props: ColoredButtonPropTypes): string =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
})

interface ColoredButtonPropTypes {
  color: 'red' | 'blue'
}

function ColoredButton({
  color,
  ...others
}: ColoredButtonPropTypes &
  Omit<MuiButtonProps, keyof ColoredButtonPropTypes>): JSX.Element {
  const classes = useStyles({ color })
  return <Button className={classes.root} {...others} />
}

export default function HookApi(): JSX.Element {
  return (
    <>
      <p>hook api with props</p>
      <ColoredButton color="red">red</ColoredButton>
      <ColoredButton color="blue">blue</ColoredButton>
    </>
  )
}
