import React, { Component } from 'react'
import {render} from 'react-dom'

import Button from './Button'

import { BaseTheme, Theme, ThemeManager } from '../../src'

const breakpoints = [
  '480px',
  '600px',
  '840px',
  '960px',
  '1280px',
  '1440px',
  '1600px',
  '1920px'
]

class Demo extends Component {
  render () {
    return (
      <BaseTheme breakpoints={breakpoints}>
        <Button>Button with default theme</Button>
        <Button>
          <Button.Icon />
          Button with Icon and default theme
        </Button>
        <Theme overrideWith={{
          Button: {
            fitContent: [true, false, true],
            backgroundColor: ['palevioletred', 'papayawhip'],
            textColor: ['papayawhip', 'palevioletred']
          }
        }}>
          <Button>Button with overrided, responsive theme</Button>
          <Button>
            <Button.Icon />
            Button with Icon and overrided, responsive theme
          </Button>
          <Theme overrideWith={{
            Button: ThemeManager.getTheme('Button.extraBordered')
          }}>
            <Button>Button with overrided(x2), responsive theme</Button>
            <Button>
              <Button.Icon />
              Button with Icon and overrided(x2), responsive theme
            </Button>
          </Theme>
        </Theme>

        <Theme overrideWith={{
          Button: ThemeManager.getTheme('Button.extraBordered')
        }}>
          <Button>
            <Button.Icon />
            Override preset
          </Button>
        </Theme>
      </BaseTheme>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
