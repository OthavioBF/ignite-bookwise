import { Eye, FilePdf, IconProps } from 'phosphor-react'
import {
  Container,
  TableHead,
  TableData,
  TableHeadRow,
  TableDataRow,
  TableContainer,
  IconButton,
} from './styles'
import { ReactNode } from 'react'
import Link from 'next/link'
import { formatPrice } from '@/utils/formatPrice'
import dayjs from 'dayjs'
import { State, StateChip } from '@/components/StateChip'

const { Cancelado, Deferido, Indeferido } = State

enum dataType {
  text,
  date,
  price,
}

interface TableHeadProps {
  name: string
  label: string
  type: string
  width: string
  render?: (name: string) => ReactNode
}

interface Actions {
  isLink?: boolean
  path?: string
  icon: () => ReactNode
  onClick?: () => void
  tooltip: string
  disabled?: boolean
}

interface TableProps {
  tableData: any[]
  tableColumns: TableHeadProps[]
  actions?: Actions[]
}

interface TableDataProps {
  [key: string]: any
}

const StateChipStyle = [
  {
    color: '#DC2626',
    background: '#FEE2E2',
  },
  {
    color: '#16A34A',
    background: '#DCFCE7',
  },
]

const tableData: TableDataProps[] = [
  {
    id: '1',
    requerimentoNumero: '20462',
    dataSolicitacao: '13/04/2019',
    valor: 40000,
    dataSituacao: '1997-07-16T19:20:30.45+01:00',
    situacao: 'Cancelado',
  },
  {
    id: '2',
    requerimentoNumero: '20463',
    dataSolicitacao: '13/04/2012',
  },
]

export default function ResponsiveTable() {
  return (
    <Container>
      <Table
        tableData={tableData}
        tableColumns={[
          {
            name: 'requerimentoNumero',
            label: 'Requerimento/numero',
            type: 'text',
            width: '20%',
          },
          {
            name: 'anexo',
            label: 'Anexo',
            type: 'icon',
            width: '5%',
            render: () => <Eye size={24} />,
          },
          {
            name: 'dataSolicitacao',
            label: 'Data Solicitacao',
            type: 'text',
            width: '20%',
          },
          {
            name: 'valor',
            label: 'Valor',
            type: 'price',
            width: '5%',
          },
          {
            name: 'dataSituacao',
            label: 'Data Situacao',
            type: 'date',
            width: '15%',
          },
          {
            name: 'situacao',
            label: 'Situacao',
            type: 'text',
            width: '10%',
            render: (value) => (
              <StateChip
                label={value}
                background={StateChipStyle[Deferido].background}
                color={StateChipStyle[Deferido].color}
              />
            ),
          },
        ]}
        actions={[
          {
            icon: () => <FilePdf size={24} weight="bold" />,
            tooltip: 'Baixar arquivo',
          },
          {
            icon: () => <Eye size={24} weight="bold" />,
            tooltip: 'Vizualizar documento',
          },
          {
            icon: () => <Eye size={24} weight="bold" />,
            tooltip: 'Baixar arquivo',
          },
          {
            icon: () => <Eye size={24} weight="bold" />,
            tooltip: 'Baixar arquivo',
          },
        ]}
      />
    </Container>
  )
}

function Table({ tableData, tableColumns, actions }: TableProps) {
  return (
    <TableContainer>
      <tbody>
        <TableHeadRow>
          {tableColumns.map((tableColumn) => (
            <TableHead
              key={tableColumn.name}
              css={{ width: `${tableColumn.width}` }}
            >
              {tableColumn.label.toLocaleUpperCase()}
            </TableHead>
          ))}

          {actions && <TableHead css={{ flex: 1 }}>AÇÕES</TableHead>}
        </TableHeadRow>

        {tableData.map((tableData) => (
          <TableDataRow key={tableData.id}>
            {tableColumns.map((tableColumn) => {
              if (tableColumn.type === 'date' && tableData[tableColumn.name]) {
                return (
                  <TableData key={tableData.id}>
                    {dayjs(tableData[tableColumn.name]).format('DD/MM/YYYY')}
                  </TableData>
                )
              }

              if (tableColumn.type === 'price' && tableData[tableColumn.name]) {
                return (
                  <TableData key={tableData.id}>
                    {formatPrice(tableData[tableColumn.name])}
                  </TableData>
                )
              }

              if (tableColumn.render && tableColumn.type === 'icon') {
                return (
                  <TableData key={tableData.id}>
                    <IconButton>
                      {tableColumn.render(tableData[tableColumn.name])}
                    </IconButton>
                  </TableData>
                )
              }

              if (tableColumn.render && tableData[tableColumn.name]) {
                return (
                  <TableData key={tableData.id}>
                    {tableColumn.render(tableData[tableColumn.name])}
                  </TableData>
                )
              }

              return (
                <TableData key={tableData.id}>
                  {tableData[tableColumn.name]}
                </TableData>
              )
            })}
            {actions && (
              <TableData css={{ flex: 1 }}>
                {actions.map((action) => {
                  action.isLink && (
                    <Link key={tableData.id} href="" prefetch={false}>
                      {action.icon()}
                    </Link>
                  )

                  return (
                    <div key={tableData.id}>
                      <IconButton onClick={action.onClick}>
                        {action.icon()}
                      </IconButton>
                      <span>{action.tooltip}</span>
                    </div>
                  )
                })}
              </TableData>
            )}
          </TableDataRow>
        ))}
      </tbody>
    </TableContainer>
  )
}
