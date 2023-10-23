import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  margin: '0 auto',
  height: 'fit-content',
  background: 'white',
  flex: 1,

  marginTop: '4rem',

  padding: '3rem',
})

export const ScrollView = styled('div', {
  overflowY: 'hidden',
  overflowX: 'auto',
  width: '100%',
})

export const TableContainer = styled('table', {
  display: 'block',
  background: '$gray100',
  borderSpacing: 0,
  borderCollapse: 'collapse',
  borderRadius: '8px',
  width: '100%',
  flex: 1,

  tbody: {
    tr: {
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',

      th: {
        '&:first-child': {
          borderTopLeftRadius: '6px',
        },

        '&:last-child': {
          borderTopRightRadius: '6px',
        },
      },
    },
  },
})

export const TableHeadRow = styled('tr', {
  width: '100%',
  background: '#E2E8F0',
})

export const TableHead = styled('th', {
  color: '#7A7A80',
  padding: '1rem',
})

export const TableDataRow = styled('tr', {
  '& + tr': {
    borderTop: '1px solid $gray300',
  },
})

export const TableData = styled('td', {
  color: '#000000',
  padding: '1rem',
  textAlign: 'center',
  verticalAlign: 'middle',

  '&:last-child': {
    textAlign: 'center',
  },

  span: {
    wordBreak: 'break-word',
    fontSize: '$md',
  },

  div: {
    position: 'relative',
    display: 'inline-block',

    transition: 'opacity 1s',

    '&:hover': {
      span: {
        opacity: 1,
        visibility: 'visible',
      },
    },

    span: {
      visibility: 'hidden',
      width: '120px',
      backgroundColor: '$gray200',
      color: '$gray400',
      padding: '$2 $3',
      borderRadius: '6px',

      opacity: 0,
      transition: 'opacity 1s',

      top: '120%',
      left: '50%',
      marginLeft: '-60px',

      position: 'absolute',
      zIndex: 1,

      '&:after': {
        content: ' ',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderWidth: '5px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent $gray200 transparent',
      },
    },
  },
})

export const IconButton = styled('button', {
  textAlign: 'center',
  borderRadius: '4px',
  width: '1.5rem',
  padding: '4px 12px',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    background: '$gray200',
  },

  svg: {
    color: '$gray400',
  },
})
