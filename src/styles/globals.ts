import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    button: {
      all: 'unset',
      cursor: 'pointer',
    },
    input: {
      all: 'unset',
    },
    textarea: {
      all: 'unset',
    },
    overflow: 'hidden',
  },
})
