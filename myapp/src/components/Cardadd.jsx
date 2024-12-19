import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Cardadd = () => {
    var [data,setdata]=useState([])
  axios.get("https://dummyapi.online/api/pokemon")
  .then((response) => {
    console.log(response.data)
    setdata(response.data)
  })
  return (
      <div >
          <Grid container spacing={2}>
              {data.map((pokemon) => (
                
            
        <Grid item xs={4} key={pokemon.id}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pokemon.image_url}
        title={pokemon.pokemon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.pokemon}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {pokemon.hitpoints}
        </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {pokemon.abilities}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
        
                  </Grid>
                  ))}
          </Grid>
          
          
    </div>
  )
}

export default Cardadd
