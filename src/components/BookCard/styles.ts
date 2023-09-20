import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
  width: '20rem',
  padding: '$5',
  background: '$gray700',
  borderRadius: '8px',
  display: 'flex',
  gap: '$5',

  div: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

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
})
