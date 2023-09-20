import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '$5',
  display: 'flex',
})

export const ImageContainer = styled('div', {
  img: {
    objectFit: 'cover',
  },
})

export const LoginContaier = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
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
