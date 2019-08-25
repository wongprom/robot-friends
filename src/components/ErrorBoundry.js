import React, { Component } from 'react'

class ErrorBoundry extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>ERROR, not good</h1>
        </div>
      )
    } else {
      return this.props.children
    }

  }
}

export default ErrorBoundry
