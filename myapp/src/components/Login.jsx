import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
          <h1>Login</h1>
          <TextField label="Email" variant="standard" /><br /><br />
          <TextField type='password' label="Password" variant="standard" />
    </div>
  )
}

export default Login
