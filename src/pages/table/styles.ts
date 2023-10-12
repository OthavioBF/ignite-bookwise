import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  margin: '0 auto',
  height: '900px',
  width: '1180px',
  background: 'white',
  flex: 1,

  marginTop: '4rem',

  padding: '3rem',
})

export const TableContainer = styled('table', {
  background: '$gray100',
  borderSpacing: 0,
  borderCollapse: 'separate',
  borderRadius: '8px',
  width: '100%',

  flex: 1,

  tbody: {
    tr: {
      '&:first-child': {
        borderTopLeftRadius: '8px',
      },

      '&:last-child': {
        borderTopRightRadius: '8px',
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
  width: '100%',

  '& + tr': {
    borderTop: '1px solid #E2E8F0',
  },
})

export const TableData = styled('td', {
  color: '#000000',
  padding: '1rem',
  textAlign: 'center',
  verticalAlign: 'middle',

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
      backgroundColor: 'black',
      color: '#fff',
      textAlign: 'center',
      padding: '5px 0',
      borderRadius: '6px',

      opacity: 0,
      transition: 'opacity 1s',

      top: '100%',
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
        borderColor: 'transparent transparent black transparent',
      },
    },
  },
})

export const IconButton = styled('button', {
  textAlign: 'center',
  borderRadius: '4px',
  width: '1.5rem',
  padding: '4px',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    background: '$gray600',
  },

  svg: {
    color: '$gray400',
  },
})
