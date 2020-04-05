import React from 'react'
import { style, compose, typography } from '@material-ui/system'
import { Box } from '@material-ui/core'
import { styled, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const variant = style({
  /* stylelint-disable */
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
  /* stylelint-enable */
})

const Text = styled(Box)(compose(variant, typography))

const theme = createMuiTheme()
theme.typography.h1 = {
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'orange',
}

export default function VariantDemo(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Text variant="h1">variant = h1</Text>
    </ThemeProvider>
  )
}
