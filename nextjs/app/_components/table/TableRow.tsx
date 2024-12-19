'use client'

import React from 'react'
import { TableRowType, TableColumnType } from '@/app/_types/table.types'

type TableRowProps = {
  columns: TableColumnType[]
  item: TableRowType
  rowIndex: number
}

const TableRow: React.FC<TableRowProps> = (props) => {
  React.useEffect(() => {
    console.log('Render TableRow')
  }, [])

  React.useEffect(() => {
    console.log('Re-render TableRow')
  }, [props.item])

  return (
    <tr
      key={props.item.keyId}
      className={`hover:bg-gift_red_lighter ${
        props.rowIndex % 2 !== 0 ? 'bg-gift_red_lightest' : ''
      }`}
    >
      {props.columns.map((column, index) => (
        <td
          key={index}
          className={`border border-white px-6 py-1 ${
            props.item.columns[column.key]?.styles || ''
          }`}
        >
          {props.item.columns[column.key]?.components}
        </td>
      ))}
    </tr>
  )
}

export default TableRow
