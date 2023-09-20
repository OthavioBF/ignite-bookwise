import { styled, css } from '../../styles/stitches.config'

export const Container = styled('div', {
  padding: '$10 3.25rem $6',
  height: 'calc(100vh - 50px)',

  borderRadius: '12px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'linear-gradient(90deg, $green200 0%, $purple200 100%)',
})

export const SideBarHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})

export const SectionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const NavigationButton = styled('button', {
  display: 'flex',
  alignItems: 'center',

  div: {
    color: 'transparent',
  },

  svg: {
    marginRight: '$3',
    marginLeft: '$4',
    color: '$gray400',
  },

  strong: {
    fontSize: '$md',
    lineHeight: '160%',
    color: '$gray400',
  },

  variants: {
    active: {
      true: {
        div: {
          width: '$1',
          background: '$gradient-vertical',
          borderRadius: 999,
        },

        svg: {
          color: '$gray100',
        },

        strong: {
          color: '$gray100',
        },
      },
    },
  },
})

export const SideBarFooter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const FooterContent = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  padding: '$4',
  borderRadius: '6px',

  transition: 'all 0.2s ease-in-out',

  img: {
    objectFit: 'cover',
  },

  span: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '160%',
  },

  '&:hover': {
    background: '$gray500',
  },
})
