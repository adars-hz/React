import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
          <h1>signup</h1>
          <TextField label="Username" variant="outlined" /><br /><br />
          <TextField label="Email" variant="outlined" /><br /><br />
          <TextField type='password' label="Password" variant="outlined" /><br /><br />
          <Button variant="contained">Submit</Button></div>
  )
}

export default Signup
