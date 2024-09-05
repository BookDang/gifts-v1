'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button, Box, Typography, Link } from '@mui/material'

interface LoginFormInputs {
  username: string
  password: string
}

export default function LoginPage() {
  const { control, handleSubmit } = useForm<LoginFormInputs>()

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
    // Xử lý đăng nhập ở đây
  }

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-400">
      <Box className="bg-white p-8 rounded-lg shadow-md w-96">
        <Typography variant="h4" className="text-center mb-6">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="small"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                size="small"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Login
          </Button>
        </form>
        <Box className="mt-4 text-center">
          <Link href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password?
          </Link>
        </Box>
        <Box className="mt-2 text-center">
          <Typography variant="body2" className="text-gray-600">
            Don't have an account?{' '}
            <Link href="#" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
