import React from 'react'

export interface PropTypes {
  children: React.ReactNode
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface StateTypes {
  isDisabled: boolean
}

export default class Button extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props)
    this.state = {
      isDisabled: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (!this.state.isDisabled) {
      this.props.onClick && this.props.onClick(event)
      this.setState({ isDisabled: true }, () => {
        setTimeout(() => {
          this.setState({ isDisabled: false })
        }, 2000)
      })
    }
  }

  render(): JSX.Element {
    return (
      <button onClick={this.handleClick} disabled={this.state.isDisabled}>
        {this.props.children}
      </button>
    )
  }
}
