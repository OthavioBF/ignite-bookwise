import { styled } from '@/styles/stitches.config'
import * as Tabs from '@radix-ui/react-tabs'

export const TabsContainer = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const TabsList = styled(Tabs.List, {
  display: 'flex',
  width: 'fit-content',
})

export const Trigger = styled(Tabs.Trigger, {
  display: 'grid',
  placeItems: 'center',
  fontSize: '$md',
  lineHeight: '$base',
  color: '#757575',
  borderBottom: '4px solid $gray100',

  padding: '12px 35px',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$gray300',
  },
  '&[data-state="active"]': {
    borderBottom: '4px solid #6246EA',
  },
  '&:focus': {
    position: 'relative',
  },
})

export const Content = styled(Tabs.Content, {
  flexGrow: 1,
  outline: 'none',
  paddingTop: '2rem',
})
