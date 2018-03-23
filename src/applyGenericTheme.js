import { css } from 'styled-components'
import media from 'styled-media-query'
import cloneDeep from 'lodash.clonedeep'

import ThemeManager from './ThemeManager'

const applyGenericTheme = (themeNamespace) => (cssRules) => ({ theme }) => {
  // Get provided breakpoints
  let breakpoints = cloneDeep(ThemeManager.getBreakpoints())

  // Get the theme properties
  const themeProps = theme[themeNamespace]
  let responsiveThemeProps = {}

  let maxValueLength = -Infinity
  for (let [themeProp, value] of Object.entries(themeProps)) {
    // Wrap simple values into an array for convenience
    const responsiveValue = (value instanceof Array) ? [...value] : [value]

    maxValueLength = Math.max(maxValueLength, responsiveValue.length)
    responsiveThemeProps[themeProp] = responsiveValue
  }

  let responsiveCssRules = []

  // Generating all the required media queries
  for (let i = 0; i < maxValueLength; i++) {
    const currentBreakpoint = breakpoints.shift()
    let currentBreakpointProps = {}

    for (let [responsiveProp, responsiveValue] of Object.entries(responsiveThemeProps)) {
      currentBreakpointProps[responsiveProp] = typeof responsiveValue[i] !== 'undefined' ? responsiveValue[i] : responsiveValue[responsiveValue.length - 1]
    }

    if (i !== 0) {
      responsiveCssRules = [...responsiveCssRules, ...css`
                ${media.greaterThan(currentBreakpoint)`
                    ${cssRules(currentBreakpointProps)}
                `}
            `]
    } else {
      responsiveCssRules = [...responsiveCssRules, ...css`
                ${cssRules(currentBreakpointProps)}
            `]
    }
  }

  return responsiveCssRules
}

export default applyGenericTheme
