import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'none',

  position: 'fixed',

  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 999,
  background: 'rgba(0, 0, 0, 0.6)',

  variants: {
    isOpen: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
      },
    },
  },
})

export const ModalContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 72px 56px',
  background: '$gray700',
  borderRadius: '12px',

  '> header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '20px',

    button: {
      marginRight: -50,
      marginTop: 50,

      transition: 'all 0.2s ease-in-out',

      padding: '$2 $2 $1 $2',
      borderRadius: '4px',

      '&:hover': {
        background: '$gray500',

        svg: {
          color: '$purple100',
        },
      },
    },
  },

  h1: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: 'bold',
    marginBottom: '$10',
    marginTop: '$4',
  },
})

export const LoginCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const LoginCard = styled('button', {
  background: '$gray600',
  border: '1px solid $gray600',
  width: '23.25rem',

  padding: '$5 $6',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  borderRadius: '8px',

  '&:hover': {
    border: '1px solid $gray500',
  },
})
