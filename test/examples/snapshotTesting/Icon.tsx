import React from 'react'

interface PropTypes {
  className: string
}

export default function Icon({ className }: PropTypes): JSX.Element {
  return <i className={className}></i>
}
