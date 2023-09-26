import { styled } from '../../styles/stitches.config'

export const Container = styled('main', {
  width: '35.25rem',
  padding: '$5',
  background: '$gray700',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  marginTop: '$10',

  border: '1px solid transparent',

  transition: 'all 0.2s ease-in-out',

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3.5rem',

    marginTop: '$5',
    padding: '$6 0',

    borderTop: '1px solid $gray600',

    div: {
      display: 'flex',
      flexDirection: 'row',

      alignItems: 'center',
      gap: '$5',

      '> div': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 0,
        strong: {
          fontSize: '$md',
          color: '$gray200',
          fontWeight: 'bold',
        },

        span: {
          fontSize: '$sm',
          color: '$gray300',
        },
      },

      svg: {
        color: '$green100',
      },
    },
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

export const Content = styled('header', {
  display: 'flex',
  gap: '2rem',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: 0,
  gap: 0,

  div: {
    display: 'flex',

    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      lineHeight: '160%',
      color: '$gray300',
    },
  },
})

export const TitleContainer = styled('div', {
  '> h1': {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: '140%',
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '160%',
    color: '$gray400',
  },
})
