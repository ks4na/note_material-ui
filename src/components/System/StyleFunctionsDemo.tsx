import React from 'react'
import { styled } from '@material-ui/core/styles'
import { palette, spacing, compose } from '@material-ui/system'

const Box = styled('div')(compose(palette, spacing))

export default function StyleFunctionsDemo(): JSX.Element {
  return (
    <Box bgcolor="green" p="1rem">
      styled div with spacing properties and color properties
    </Box>
  )
}
