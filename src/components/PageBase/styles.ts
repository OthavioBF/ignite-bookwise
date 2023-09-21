import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  padding: '$5',
  display: 'flex',
  gap: '6rem',

  '> main': {
    paddingTop: '3.25rem',
    height: 'calc(100vh - 50px)',
  },
})
