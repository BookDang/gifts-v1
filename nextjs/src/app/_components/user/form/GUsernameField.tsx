'use client'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField, Tooltip } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

interface GUsernameFieldProps {
  name: string
  rules: Record<string, any>
}

const GUsernameField: React.FC<GUsernameFieldProps> = ({ name, rules }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="!mt-3">
          <div className="flex items-center justify-between">
            <label className="!text-gray-600">
              Username <span className="text-red-500">*</span>
            </label>
            <Tooltip
              title={
                <div>
                  <p>Username must contain at least:</p>
                  <ul>
                    <li> - Minimum 6 characters</li>
                    <li> - Maximum 20 characters</li>
                    <li> - Only letters, numbers, and underscores</li>
                  </ul>
                </div>
              }
            >
              <InfoIcon
                fontSize="small"
                className="ml-1 text-gray-400 cursor-help"
              />
            </Tooltip>
          </div>
          <TextField
            {...field}
            size="small"
            className="!mt-1"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        </div>
      )}
    />
  )
}

export default GUsernameField
