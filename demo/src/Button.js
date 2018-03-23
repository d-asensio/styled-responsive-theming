import styled, { css } from 'styled-components'
import { ThemeManager } from '../../src'

const applyButtonTheme = ThemeManager.createTheme('Button', {
  default: {
    fitContent: false,
    radius: '0.25em',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: '0.125em',
    hoverBackgroundColor: 'springgreen',
    hoverBorderColor: 'white',
    hoverTextColor: 'white',
    textColor: 'white'
  },
  extraBordered: {
    radius: '1em'
  }
})

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  border-style: solid;

  transition-property: background-color, border-color, color;
  transition-duration:  0.3s;

  outline: none;

  padding: 0.5em 1em;

  ${applyButtonTheme(({
    fitContent,
    radius,
    borderWidth,
    backgroundColor,
    borderColor,
    textColor,
    hoverBackgroundColor,
    hoverBorderColor,
    hoverTextColor
  }) => css`
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    border-width: ${borderWidth};
    color: ${textColor};

    border-radius: ${radius};

    &:hover {
      background-color: ${hoverBackgroundColor};
      border-color: ${hoverBorderColor};
      color: ${hoverTextColor};
    }

    width: ${fitContent ? 'auto' : '100%'};
  `)}
`

Button.Icon = styled.div`
  margin-right: 0.5em;
  width: 1em;
  height: 1em;

  border-radius: 0.5em;

  transition-property: background-color;
  transition-duration:  0.3s;

  ${applyButtonTheme(({
    textColor,
    hoverTextColor
  }) => css`
    background-color: ${textColor};

    ${Button}:hover > & {
      background-color: ${hoverTextColor};
    }
  `)}
`

export default Button
