import React from 'react'
import { ThemeProvider, useTheme } from '@material-ui/styles'

interface ThemeType {
  bgColor: string
  color: string
}

export default function UseThemeDemo(): JSX.Element {
  const theme: ThemeType = {
    bgColor: 'red',
    color: 'green',
  }
  return (
    <ThemeProvider theme={theme}>
      <InnerComponent />
    </ThemeProvider>
  )
}

function InnerComponent(): JSX.Element {
  const themeObj = useTheme<ThemeType>()
  return (
    <div>
      <p>theme.bgColor is {themeObj.bgColor}</p>
      <p>theme.color is {themeObj.color}</p>
    </div>
  )
}
