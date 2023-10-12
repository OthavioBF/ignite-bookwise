import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '90%',
})

export const ExploreHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
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

  label: {
    display: 'flex',
    alignItems: 'center',
    padding: '$3 $5',
    gap: '$2',

    border: '1px solid $gray500',
    borderRadius: '4px',

    transition: 'all 0.2s ease-in-out',

    svg: {
      color: '$gray500',
    },

    input: {
      width: '27rem',
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

export const ChipsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$3',
  marginTop: '$10',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    button: {
      transition: 'all 0.2s ease-in-out',

      borderRadius: '4px',
      padding: '$2 $2 $1 $2',

      '&:hover': {
        background: '$gray500',

        svg: {
          color: '$purple100',
        },
      },
    },
  },
})

export const Content = styled('div', {
  height: 'calc(70vh - 50px)',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '$5',
  marginTop: '4rem',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  h1: {},

  span: {
    color: '$gray200',
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
