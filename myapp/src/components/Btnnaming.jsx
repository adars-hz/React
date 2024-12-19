import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Btnnaming = () => {
    const [name, setName] = useState("")

    const handlereact = () => {
        setName("React");
    }

    const handleveu = () => {
        setName("VEU");
    }

    const handleangular = () => {
        setName("Angular");
    }

    //use effect( syntax)
    //useEffect(() => { },[])

    useEffect(() => {
        handleangular()
    },[])


  return (
      <div>
          <Typography variant='h6'> Welcome "{name}"</Typography><br /><br />         
          <Button variant="outlined" onClick={handlereact}>REACT</Button><br /><br />
          <Button variant="outlined" color="error" onClick={handleveu}>VEU</Button><br /><br />
          <Button variant="contained" color="success" onClick={handleangular}>ANGULAR</Button>
        

    </div>
  )
}

export default Btnnaming
