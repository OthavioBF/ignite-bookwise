import { styled } from '../../../styles/stitches.config'

export const Container = styled('div', {
  padding: '$5',
  display: 'flex',
  flexDirection: 'column',
})

export const PerfilHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '',
  width: '100%',

  div: {
    display: 'flex',
    gap: '$3',
  },

  svg: {
    color: '$green100',
  },

  h1: {
    fontWeight: 'bold',
    fontSize: '$xl',
  },
})

export const Content = styled('main', {
  display: 'flex',
  gap: '4rem',
})

export const ListContainer = styled('div', {
  label: {
    display: 'flex',
    alignItems: 'center',
    padding: '$3 $5',
    gap: '$2',
    marginBottom: '$8',
    marginTop: '$10',

    border: '1px solid $gray500',
    borderRadius: '4px',

    transition: 'all 0.2s ease-in-out',

    svg: {
      color: '$gray500',
    },

    input: {
      width: '100%',
      color: '$gray200',
      fontSize: '$sm',
    },

    '&:has(input:focus)': {
      borderColor: '$green200',

      svg: {
        color: '$grenn200',
      },
    },
  },
})

export const ScrollView = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  overflowY: 'auto',
  maxHeight: '68vh',
  marginBottom: '$5',

  '&::-webkit-scrollbar': {
    width: '0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$10',

  alignItems: 'center',
  borderLeft: '1px solid $gray700',

  '> header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      objectFit: 'cover',
      borderRadius: '50%',
    },

    strong: {
      marginTop: '$5',
      fontSize: '$xl',
      color: '$gray100',
      fontWeight: 'bold',
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  '> div': {
    height: '4px',
    width: '32px',
    background: '$gradient-horizontal',
    color: 'transparent',
    borderRadius: 99,
    marginTop: '$8',
    marginBottom: '$8',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
    padding: '$5 3.5rem',

    div: {
      display: 'flex',
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
})
