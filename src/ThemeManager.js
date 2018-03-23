import objectPath from 'object-path'
import mapValues from 'lodash.mapvalues'

import applyGenericTheme from './applyGenericTheme'

class ThemeManager {
  constructor () {
    this.themes = {}
    this.breakpoints = []
  }

  getBreakpoints () {
    if (this.breakpoints.length === 0) {
      throw new Error('You have to provide an array of breakpoints')
    }

    return this.breakpoints
  }

  setBreakpoints (breakpoints) {
    this.breakpoints = breakpoints
  }

  createTheme (namespace, theme) {
    this.themes[namespace] = theme

    if (!theme['default']) {
      throw new Error('To create a theme it must have a "default" key')
    }

    return applyGenericTheme(namespace)
  }

  getDefaultThemes () {
    return mapValues(this.themes, theme => theme.default)
  }

  getTheme (themePath) {
    const theme = objectPath.get(this.themes, themePath)

    if (!theme) {
      throw new Error(`No theme for the given path: '${themePath}'`)
    }

    return theme
  }
}

// This is a singleton
export default new ThemeManager()
