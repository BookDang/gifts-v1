import React from 'react'
import { TableColumnType } from '@/app/_types/table.types'

type TableHeadRowProps = {
  columns: TableColumnType[]
}

const TableHeadRow: React.FC<TableHeadRowProps> = (props) => {
  return (
    <thead className="sticky top-0 bg-gift_red">
      <tr>
        {props.columns.map((column, index) => (
          <th
            key={index}
            className={`border border-white py-1 font-medium bg-gift_red text-white ${
              column.styles || ''
            }`}
          >
            <span>{column.title}</span>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeadRow
