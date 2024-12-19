import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    const incrementCounter = () => {
        setcount(count + 1)
    }
    const decrementCounter = () => {
    setcount(count-1)
    }
  return (
    <div>
          <Button variant="outlined" color="error">{count}</Button><br /><br />
          <Button onClick={incrementCounter} variant="contained" color="success">kootuka</Button>&nbsp; &nbsp;
          <Button onClick={decrementCounter} variant="contained" color="success">kuraikuka</Button>
    </div>
  )
}

export default Counter
