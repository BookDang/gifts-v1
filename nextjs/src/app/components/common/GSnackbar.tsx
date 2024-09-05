import React from 'react'
import { Snackbar, Alert, AlertProps } from '@mui/material'

type GSnackbarProps = {
  open: boolean
  message: string
  severity?: AlertProps['severity']
  onClose: () => void
  autoHideDuration?: number
}

const GSnackbar: React.FC<GSnackbarProps> = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={props.onClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default GSnackbar
