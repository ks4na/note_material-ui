import React from 'react'
import { borders } from '@material-ui/system'
import { styled } from '@material-ui/core/styles'

const BorderedDiv = styled('div')(borders)

export default function BordersDemo(): JSX.Element {
  return (
    <>
      <BorderedDiv
        border={1}
        borderTop={0}
        borderColor="primary.main"
        borderRadius="borderRadius"
        style={{ width: 100, height: 100, margin: 20 }}
      ></BorderedDiv>
    </>
  )
}
