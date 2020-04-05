import React, { useState } from 'react'
import {
  ThemeProvider,
  makeStyles,
  createStyles,
  useTheme,
} from '@material-ui/core/styles'

interface MyTheme {
  color: string
}

export default function StressTest(): JSX.Element {
  const [color, setColor] = useState('#ffa500')
  const [bgColor, setBgColor] = useState('#008000')

  const theme: MyTheme = {
    color: color,
  }

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setColor(e.target.value)
  }

  function handleBgColorChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setBgColor(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <fieldset>
          <div>
            <label htmlFor="color">theme color: </label>
            <input
              id="color"
              type="color"
              onChange={handleColorChange}
              value={color}
            />
          </div>
          <div>
            <label htmlFor="background-color">
              background-color property:{' '}
            </label>
            <input
              id="background-color"
              type="color"
              onChange={handleBgColorChange}
              value={bgColor}
            />
          </div>
        </fieldset>
        <Component bgColor={bgColor} />
      </div>
    </ThemeProvider>
  )
}

interface ComponentPropTypes {
  bgColor: string
}

const useStyles = makeStyles((theme: MyTheme) =>
  createStyles({
    root: (props: ComponentPropTypes) => ({
      backgroundColor: props.bgColor,
      color: theme.color,
    }),
  })
)

function Component({ bgColor }: ComponentPropTypes): JSX.Element {
  const theme = useTheme<MyTheme>()
  const classes = useStyles({ bgColor })

  const renderedCount = React.useRef(1)

  React.useEffect(() => {
    renderedCount.current += 1
  })
  return (
    <div className={classes.root}>
      rendered {renderedCount.current} times
      <br />
      color: {theme.color}
      <br />
      backgroundColor: {bgColor}
    </div>
  )
}
