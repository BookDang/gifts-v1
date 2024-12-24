import React, { JSX, Suspense } from 'react'
import TableRow from '@/app/_components/table/TableRow'
import { TableColumnType, TableRowType } from '@/app/_types/table.types'
import TableHeadRow from '@/app/_components/table/TableHeadRow'

type TableProps = {
  columns: TableColumnType[]
  data: TableRowType[] | undefined
  classNameTable?: string
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className={`${props.classNameTable || ''}`}>
      <TableHeadRow columns={props.columns} />
      <tbody>
        {props.data === undefined
          ? renderLoadingRow(props.columns.length)
          : props.data.length === 0
          ? renderTableNoData(props.columns.length)
          : renderTableRows(props.data, props.columns)}
      </tbody>
    </table>
  )
}

export default Table

function renderLoadingRow(numberOfColumns: number): JSX.Element {
  return (
    <tr>
      <th className="border border-white py-1 text-center font-medium" colSpan={numberOfColumns}>
        Loading...
      </th>
    </tr>
  )
}

function renderTableNoData(numberOfColumns: number): JSX.Element {
  return (
    <tr>
      <th className="border border-white py-1 text-center font-medium" colSpan={numberOfColumns}>
        No data
      </th>
    </tr>
  )
}

function renderTableRows(data: TableRowType[] | undefined, columns: TableColumnType[]): React.ReactNode {
  return data?.map((item, rowIndex) => <TableRow key={item.keyId} columns={columns} item={item} rowIndex={rowIndex} />)
}
