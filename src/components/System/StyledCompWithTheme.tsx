import React from 'react'
import { styled, ThemeProvider } from '@material-ui/core/styles'
import { spacing, palette, compose, breakpoints } from '@material-ui/system'

const Box = styled('div')(breakpoints(compose(spacing, palette)))

type KeyType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ValueType = Record<KeyType, number>

const keys: KeyType[] = ['xs', 'sm', 'md', 'lg', 'xl']
const values: ValueType = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const theme = {
  breakpoints: {
    keys,
    up: (key: KeyType): string => `@media (min-width:${values[key]}px)`,
  },
  spacing: 4,
  palette: {
    primary: 'pink',
  },
}

export default function StyledCompWithTheme(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box
        xs={{ p: 1, color: 'primary' }}
        sm={{ p: 2, color: 'red' }}
        md={{ p: 3, color: 'green' }}
      >
        {'p = n * 8px and color = "pink"'}
      </Box>
    </ThemeProvider>
  )
}
