import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'none',
  cursor: 'default',
  position: 'fixed',

  width: '100vw',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 999,
  background: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateX(110%)',
  transition: 'all 0.3s ease-in-out',

  variants: {
    isOpen: {
      true: {
        display: 'flex',
        justifyContent: 'flex-end',
        transform: 'translateX(0%)',
      },
    },
  },
})

export const ModalContent = styled('div', {
  right: 0,
  top: 0,
  bottom: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 0 0 3rem',
  background: '$gray800',
})

export const ScrollView = styled('div', {
  overflowY: 'auto',
  maxHeight: '100vh',
  paddingRight: '3rem',
  paddingBottom: '3rem',

  '&::-webkit-scrollbar': {
    width: '6px',
    background: '$gray700',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '6px',
  },

  '> header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '20px',

    button: {
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
})

export const CommentsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$10',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      fontSize: '$4',
      fontWeight: 'bold',
      lineHeight: '160%',
      color: '$purple100',
      padding: '$1 $2',
      borderRadius: '6px',

      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.2)',
      },
    },
  },
})

export const CommentsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '564px',
  gap: '$5',
})
