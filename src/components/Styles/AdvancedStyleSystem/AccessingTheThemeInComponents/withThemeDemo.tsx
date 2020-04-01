import React from 'react'
import { ThemeProvider, WithTheme, withTheme } from '@material-ui/styles'

interface ThemeType {
  fontSize: number
  fontWeight: 'bold' | 'normal'
}

export default function WithThemeDemo(): JSX.Element {
  const theme: ThemeType = {
    fontSize: 16,
    fontWeight: 'bold',
  }
  return (
    <ThemeProvider theme={theme}>
      <InnerComponentWithTheme />
    </ThemeProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropTypes extends WithTheme<ThemeType> {}

function InnerComponent(props: PropTypes): JSX.Element {
  const themeObj = props.theme
  return (
    <div>
      <p>theme.fontSize is {themeObj.fontSize}</p>
      <p>theme.fontWeight is {themeObj.fontWeight}</p>
    </div>
  )
}

const InnerComponentWithTheme = withTheme<ThemeType, typeof InnerComponent>(
  InnerComponent
)
