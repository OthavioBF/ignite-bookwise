import { styled } from '../../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '4rem',
})

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  marginBottom: '$10',

  svg: {
    color: '$green100',
  },

  h1: {
    fontWeight: 'bold',
    fontSize: '$xl',
  },
})

export const AssessmentsContainer = styled('div', {
  overflowY: 'auto',
  maxHeight: '82.5vh',
  marginBottom: '$5',

  '&::-webkit-scrollbar': {
    width: '0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },
})

export const LastReadContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      display: 'flex',
      gap: '0.875rem',
      alignItems: 'center',
      color: '$purple100',
      padding: '$1 $2',
      borderRadius: '6px',

      svg: {
        color: '$purple100',
      },

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.2)',
      },
    },
  },
})

export const RecentAssessmentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$10',
})

export const PopularBooksContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  marginTop: '4.25rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      display: 'flex',
      gap: '0.875rem',
      alignItems: 'center',
      color: '$purple100',
      padding: '$1 $2',
      borderRadius: '6px',

      svg: {
        color: '$purple100',
      },

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.2)',
      },
    },
  },
})

export const BookCardContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  overflowY: 'auto',
  maxHeight: '650px',

  '&::-webkit-scrollbar': {
    width: '0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'transparent',
  },
})
