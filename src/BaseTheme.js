import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeManager from './ThemeManager'

class BaseTheme extends Component {
  render () {
    const { children, breakpoints } = this.props

    ThemeManager.setBreakpoints(breakpoints)

    return (
      <ThemeProvider
        theme={ThemeManager.getDefaultThemes()}
      >
        <Fragment>{children}</Fragment>
      </ThemeProvider>
    )
  }
}

export default BaseTheme
