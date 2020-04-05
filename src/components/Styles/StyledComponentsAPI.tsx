import React from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
})

export default function StyledComponentsAPI(): JSX.Element {
  return <StyledButton>styled with styled components api</StyledButton>
}
