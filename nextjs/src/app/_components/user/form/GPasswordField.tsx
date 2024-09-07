'use client'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField, Tooltip } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

interface GPasswordFieldProps {
  name: string
  rules: Record<string, any>
}

const GPasswordField: React.FC<GPasswordFieldProps> = ({ name, rules }) => {
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
              Password <span className="text-red-500">*</span>
            </label>
            <Tooltip
              title={
                <div>
                  <p>Password must contain at least:</p>
                  <p> - Minimum 6 characters</p>
                  <p> - Maximum 30 characters</p>
                  <p> - 1 lowercase letter</p>
                  <p> - 1 uppercase letter</p>
                  <p> - 1 special character (e.g., !@#$%^&*)</p>
                  <p> - 1 number</p>
                </div>
              }
              arrow
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
            type="password"
            variant="outlined"
            fullWidth
            className="!mt-1"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        </div>
      )}
    />
  )
}

export default GPasswordField
