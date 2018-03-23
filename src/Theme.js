import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import merge from 'lodash.merge'
import cloneDeep from 'lodash.clonedeep'

class Theme extends Component {
  overrideTheme (contextTheme, overrideWith) {
    const overrideTheme = (overrideWith instanceof Function) ? overrideWith(contextTheme) : overrideWith

    let newTheme = cloneDeep(contextTheme)
    return merge(newTheme, overrideTheme)
  }

  render () {
    const { children, overrideWith } = this.props
    return (
      <ThemeProvider
        theme={contextTheme => this.overrideTheme(contextTheme, overrideWith)}
      >
        <Fragment>{children}</Fragment>
      </ThemeProvider>
    )
  }
}

export default Theme
