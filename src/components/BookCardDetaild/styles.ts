import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
  width: '608px',
  background: '$gray600',
  padding: '$5 $6',
  borderRadius: '8px',
  display: 'flex',
  gap: '$5',
})

export const ContainerMoreDetails = styled('button', {
  width: '608px',
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

    '> div': {
      display: 'flex',
      gap: '$4',

      img: {
        borderRadius: '50%',
        objectFit: 'cover',
      },

      div: {
        display: 'flex',
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

export const InfoContainer = styled('main', {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
      fontSize: '$sm',
      lineHeight: '160%',
      color: '$gray300',
    },
  },
  div: {
    marginTop: '$3',
    h1: {
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: '140%',
    },

    span: {
      fontSize: '$',
      lineHeight: '160%',
    },
  },
  footer: {
    marginTop: '$6',
  },
})
