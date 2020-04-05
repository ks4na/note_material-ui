import React from 'react'
import { makeStyles } from '@material-ui/styles'
import styles from './index.css'

const useStyles = makeStyles({
  root: {
    color: 'blue',
  },
})

export default function CSSInjectionOrderDemo(): JSX.Element {
  const classes = useStyles()
  return (
    <p className={`${styles.root} ${classes.root}`}>
      默认情况下， style 标签都被插入在 head
      标签的末尾位置，这样会比其它样式生成方案（如 CSS 模块化、styled
      components） 生成的 style 标签具有更高的权重。
    </p>
  )
}
