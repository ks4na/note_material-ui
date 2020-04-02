import React from 'react'
import { style } from '@material-ui/system'
import { styled } from '@material-ui/core/styles'
import googleIcon from '../../../assets/imgs/google.png'

const verticalAlign = style({
  // stylelint-disable-next-line
  prop: 'verticalAlign',
})

const VerticalAlignedImg = styled('img')(verticalAlign)

export default function CustomStyleFunction(): JSX.Element {
  return (
    <>
      <p>
        Here is an img with vertical-align: top
        <VerticalAlignedImg verticalAlign="top" src={googleIcon} alt="" />
      </p>
      <ColoredBox bc="primary.main">
        this is a div with border color property
      </ColoredBox>
    </>
  )
}

const borderColor = style({
  // stylelint-disable-next-line property-no-unknown
  prop: 'bc',
  // stylelint-disable-next-line property-no-unknown, value-keyword-case
  cssProperty: 'borderColor',
  // stylelint-disable-next-line property-no-unknown
  themeKey: 'palette',
  transform: value => `${value} !important`,
})

const ColoredBox = styled('div')(borderColor)
