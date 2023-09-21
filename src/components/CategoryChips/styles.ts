import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
  padding: '$1 $4',
  display: 'flex',
  gap: '$5',

  border: '1px solid $purple100',
  borderRadius: 999,

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    border: '1px solid $purple100',
  },

  span: {
    fontSize: '$md',
    lineHeight: '$base',
    color: '$purple100',
  },

  variants: {
    isSelected: {
      true: {
        background: '$purple200',
        borderColor: '$purple200',

        span: {
          color: '$gray100',
        },
      },
    },
  },
})
