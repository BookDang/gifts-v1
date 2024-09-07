'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  Box,
  Tooltip,
  styled,
  AlertProps,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { TUser } from '@/utilities/types/user.type'
import CreateAccountService from '@/services/create_account.service'
import { Gender } from '@/utilities/enums/user.enum'
import GSnackbar from '@/app/_components/common/GSnackbar'

type TFormData = TUser

const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormData>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      gender: Gender.MALE,
    },
    reValidateMode: 'onBlur',
  })

  const [openGSnackbar, setOpenGSnackbar] = React.useState<boolean>(false)
  const [gSnackbarMessage, setGSnackbarMessage] = React.useState<string>('')
  const [gSnackbarSeverity, setGSnackbarSeverity] =
    React.useState<AlertProps['severity']>('success')

  const createAccountService = new CreateAccountService()

  const onSubmit = async (data: TFormData) => {
    console.log(data)
    createAccountService
      .createAccount(data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setGSnackbarMessage(response.data.message)
          setGSnackbarSeverity('success')
          setOpenGSnackbar(true)
          reset()
        } else {
          throw new Error('Failed to create account')
        }
      })
      .catch((error) => {
        setGSnackbarMessage(error.response.data.message)
        setGSnackbarSeverity('error')
        setOpenGSnackbar(true)
      })
  }

  const GlassBox = styled(Box)(() => ({
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }))

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <GlassBox className="p-8 w-96">
        <Typography variant="h4" className="text-center mb-6 !text-gray-600">
          Create Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Name is required',
            }}
            render={({ field }) => (
              <div className="!mt-3">
                <label className="!text-gray-600">
                  Name <span className="text-red-500">*</span>
                </label>
                <TextField
                  {...field}
                  size="small"
                  className="!mt-1"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
            )}
          />

          <Controller
            name="username"
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters',
              },
              maxLength: {
                value: 30,
                message: 'Username must be at most 30 characters',
              },
            }}
            render={({ field }) => (
              <div className="!mt-3">
                <div className="flex items-center justify-between">
                  <label className="!text-gray-600">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <Tooltip
                    title={
                      <div>
                        <p>Username must contain at least:</p>
                        <p> - 6 characters, maximum 20 characters</p>
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
                  className="!mt-1"
                  fullWidth
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            }}
            render={({ field }) => (
              <div className="!mt-3">
                <label className="!text-gray-600">Email</label>
                <TextField
                  {...field}
                  size="small"
                  className="!mt-1"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength: {
                value: 30,
                message: 'Password must be at most 12 characters',
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
                message:
                  'Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character',
              },
            }}
            render={({ field }) => (
              <div className="!mt-3">
                <div className="flex items-center justify-between">
                  <label className="!text-gray-600">
                    Password <span className="text-red-500">*</span>
                  </label>

                  <Tooltip
                    title={
                      <div>
                        <p>Password must contain at least:</p>
                        <p> - 6 characters, maximum 30 characters</p>
                        <p> - 1 lowercase letter</p>
                        <p> - 1 uppercase letter</p>
                        <p> - 1 special character</p>
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
                  className="!mt-1"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </div>
            )}
          />

          <Controller
            name="gender"
            control={control}
            rules={{ required: 'Gender is required' }}
            render={({ field }) => (
              <div className="!mt-3">
                <p className="!text-gray-600 !mb-1">
                  Gender <span className="text-red-500">*</span>
                </p>
                <TextField
                  {...field}
                  fullWidth
                  select
                  size="small"
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </div>
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full !mt-8"
          >
            Create Account
          </Button>
        </form>
      </GlassBox>
      <GSnackbar
        open={openGSnackbar}
        message={gSnackbarMessage}
        severity={gSnackbarSeverity}
        onClose={() => setOpenGSnackbar(false)}
        resetMessage={() => setGSnackbarMessage('')}
      />
    </Box>
  )
}

export default CreateAccount
