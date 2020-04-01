import React from 'react'
import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import { Omit } from '@material-ui/types'

interface ColoredButtonPropTypes {
  color: 'red' | 'blue'
}

const ColoredButton = styled(
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    color,
    ...others
  }: ColoredButtonPropTypes &
    Omit<MuiButtonProps, keyof ColoredButtonPropTypes>) => (
    <Button {...others} />
  )
)({
  color: '#fff',
  background: (props: ColoredButtonPropTypes): string =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
})

export default function StyledComponentApi(): JSX.Element {
  return (
    <>
      <p>styled components api with props</p>
      <ColoredButton color="red">red</ColoredButton>
      <ColoredButton color="blue">blue</ColoredButton>
    </>
  )
}
