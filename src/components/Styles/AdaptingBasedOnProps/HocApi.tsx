import React from 'react'
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { Omit } from '@material-ui/types'

const styles = {
  root: {
    color: '#fff',
    background: (props: ColoredButtonPropTypes): string =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
}

interface ColoredButtonPropTypes {
  color: 'red' | 'blue'
}

function ColoredButton(
  props: WithStyles<typeof styles> &
    ColoredButtonPropTypes &
    Omit<MuiButtonProps, keyof ColoredButtonPropTypes>
): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { classes, color, ...others } = props
  return <Button className={classes.root} {...others} />
}

const StyledColoredButton = withStyles(styles)(ColoredButton)

export default function HocApiWithProps(): JSX.Element {
  return (
    <>
      <p>hoc api with props</p>
      <StyledColoredButton color="red">red</StyledColoredButton>
      <StyledColoredButton color="blue">blue</StyledColoredButton>
    </>
  )
}
