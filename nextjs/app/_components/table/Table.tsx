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
  const [tableBody, setTableBody] = React.useState<React.ReactNode>()

  React.useEffect(() => {
    if (props.data === undefined) {
      setTableBody(renderLoadingRow())
    } else if (props.data.length === 0) {
      setTableBody(renderTableNoData())
    } else {
      setTableBody(renderTableRows())
    }
  }, [props.data])

  function renderLoadingRow(): JSX.Element {
    return (
      <tr>
        <th
          className="border border-white py-1 text-center font-medium"
          colSpan={props.columns.length}
        >
          Loading...
        </th>
      </tr>
    )
  }

  // It is need to optimize this function
  function renderTableNoData() {
    return (
      <tr>
        <th
          className="border border-white py-1 text-center font-medium"
          colSpan={props.columns.length}
        >
          No data
        </th>
      </tr>
    )
  }

  // It is need to optimize this function
  function renderTableRows(): React.ReactNode {
    return props.data?.map((item, rowIndex) => (
      <TableRow
        key={item.keyId}
        columns={props.columns}
        item={item}
        rowIndex={rowIndex}
      />
    ))
  }

  return (
    <table className={`${props.classNameTable || ''}`}>
      <TableHeadRow columns={props.columns} />
      <Suspense
        fallback={
          <p className="border border-white py-1 text-center font-medium w-full">
            Loading...
          </p>
        }
      >
        <tbody>{tableBody}</tbody>
      </Suspense>
    </table>
  )
}

export default Table
