'use client'

import React from 'react'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  styled,
  AlertProps,
} from '@mui/material'
import { TUser } from '@/utilities/types/user.type'
import SignupService from '@/services/signup.service'
import { Gender } from '@/utilities/enums/user.enum'
import GSnackbar from '@/app/_components/common/GSnackbar'
import UserRules from '@/utilities/rules/user.rule'
import GPasswordField from '@/app/_components/user/form/GPasswordField'
import GUsernameField from '@/app/_components/user/form/GUsernameField'

type TFormData = TUser

const SignUp = () => {
  const methods = useForm<TFormData>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      gender: Gender.MALE,
    },
    reValidateMode: 'onBlur',
  })

  const {
    control,
    formState: { errors },
    reset,
  } = methods

  const [openGSnackbar, setOpenGSnackbar] = React.useState<boolean>(false)
  const [gSnackbarMessage, setGSnackbarMessage] = React.useState<string>('')
  const [gSnackbarSeverity, setGSnackbarSeverity] =
    React.useState<AlertProps['severity']>('success')

  const signupService = new SignupService()

  const onSubmit = async (data: TFormData) => {
    signupService
      .signup(data)
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
    <Box className="flex items-center justify-center min-h-[calc(100vh_-_6.5rem)]">
      <GlassBox className="p-8 w-96">
        <Typography variant="h4" className="text-center mb-6 !text-gray-600">
          Create Account
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
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

            <GUsernameField name="username" rules={UserRules.username} />

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

            <GPasswordField name="password" rules={UserRules.password} />

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
        </FormProvider>
      </GlassBox>
      <GSnackbar
        open={openGSnackbar}
        message={gSnackbarMessage}
        severity={gSnackbarSeverity}
        onClose={() => setOpenGSnackbar(false)}
      />
    </Box>
  )
}

export default SignUp
