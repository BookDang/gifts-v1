
export type TableColumnType = {
  key: string
  title: string
  styles?: string
}

export type TableRowType = {
  keyId: string | number | null
  columns: {
    [key: string]: {
      components: string | number | React.ReactNode | boolean
      styles?: string
    }
  }
}