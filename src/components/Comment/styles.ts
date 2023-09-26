import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  background: '$gray700',
  padding: '$5 $6',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',

  '> header': {
    display: 'flex',
    alignItems: 'center',
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

  footer: {
    marginTop: '$3',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: '$2',

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      padding: '$2',
      background: '$gray600',
      borderRadius: '4px',
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  width: '100%',
})

export const TextArea = styled('textarea', {
  marginTop: '$6',
  width: '100%',
  height: '136px',
  background: '$gray800',
  padding: '0.75rem $5',

  fontSize: '$sm',
  lineHeight: '160%',
  color: '$gray200',

  borderRadius: '4px',
  border: '1px solid $gray800',

  transition: 'all 0.2s ease-in-out',

  '&:focus': {
    border: '1px solid $gray500',
  },

  '&::placeholder': {
    color: '$gray400',
    fontSize: '$sm',
  },
})
