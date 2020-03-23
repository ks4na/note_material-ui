import React, { useState } from 'react'

interface PropTypes {
  page: string
  children: string
}

export default function Link({ page, children }: PropTypes): JSX.Element {
  const [isActive, setIsActive] = useState(false)

  const onMouseEnter = function(): void {
    setIsActive(true)
  }

  const onMouseLeave = function(): void {
    setIsActive(false)
  }
  return (
    <a
      className={`normal${isActive ? ' active' : ''}`}
      href={page}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}
