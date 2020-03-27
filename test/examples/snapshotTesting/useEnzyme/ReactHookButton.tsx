import React, { useState } from 'react'

interface PropTypes {
  children: React.ReactNode
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ children, onClick }: PropTypes): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false)
  const handleClick = function(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (!isDisabled) {
      onClick && onClick(event)
      setIsDisabled(true)
      setTimeout(() => {
        setIsDisabled(false)
      }, 2000)
    }
  }

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
