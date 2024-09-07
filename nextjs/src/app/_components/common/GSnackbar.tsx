import React from 'react'
import { Snackbar, Alert, AlertProps } from '@mui/material'

type GSnackbarProps = {
  open: boolean
  message: string | string[]
  severity?: AlertProps['severity']
  onClose: () => void
  resetMessage: () => void
  autoHideDuration?: number
}

const GSnackbar: React.FC<GSnackbarProps> = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration || 3000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={props.onClose} severity={props.severity}>
        {Array.isArray(props.message)
          ? props.message.map((message, index) => (
              <div key={index}>{message}</div>
            ))
          : props.message}
      </Alert>
    </Snackbar>
  )
}

export default GSnackbar
