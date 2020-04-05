import React from 'react'
import { useMediaQuery, useTheme, Theme } from '@material-ui/core'

export default function JSMediaQuery(): JSX.Element {
  const result1 = useMediaQuery('(min-width: 600px)')

  const theme = useTheme()
  const result2 = useMediaQuery(theme.breakpoints.down('md'))

  const result3 = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'md')
  )

  return (
    <div>
      <p>{`useMediaQuery('(min-width: 600px)') - ${result1}`}</p>
      <p>{`useMediaQuery(theme.breakpoints.down('md')) - ${result2}`}</p>
      <p>
        {`useMediaQuery(theme => theme.breakpoints.between('sm', 'md')) - ${result3}`}
      </p>
    </div>
  )
}
