import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
  width: '20rem',
  padding: '$5',
  background: '$gray700',
  borderRadius: '8px',
  display: 'flex',
  gap: '$5',

  border: '1px solid transparent',

  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    header: {
      h1: {
        fontSize: '$md',
        fontWeight: 'bold',
        lineHeight: '140%',
      },

      span: {
        fontSize: '$xs',
        lineHeight: '160%',
      },
    },

    footer: {},
  },

  footer: {
    p: {
      fontSize: '$sm',
      lineHeight: '160%',
      color: '$gray300',
    },
  },

  '&:hover': {
    border: '1px solid $gray500',
  },

  variants: {
    hasDescription: {
      true: {
        main: {
          display: 'flex',
          gap: '$5',
        },

        width: '39rem',

        flexDirection: 'column',
      },
    },
  },
})
