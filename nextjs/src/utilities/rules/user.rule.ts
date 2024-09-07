const UserRules = {
  username: {
    required: 'Username is required',
    minLength: {
      value: 6,
      message: 'Username must be at least 6 characters',
    },
    maxLength: {
      value: 30,
      message: 'Username must be at most 30 characters',
    },
  },
  password: {
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
  },
}

export default UserRules
