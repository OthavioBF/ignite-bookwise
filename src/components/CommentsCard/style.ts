import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  background: '$gray700',
  padding: '$5 $6',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  '> header': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',

    '> div': {
      display: 'flex',
      gap: '$4',

      img: {
        borderRadius: '50%',
        objectFit: 'cover',
      },

      div: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',

        strong: {
          fontSize: '$md',
          lineHeight: '160%',
        },

        span: {
          fontSize: '$sm',
          lineHeight: '160%',
          color: '$gray400',
        },
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  gap: '$5',
})
