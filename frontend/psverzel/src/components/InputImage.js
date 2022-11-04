import { Button, Grid } from '@mui/material'
import React from 'react'

export default function InputImage(props) {
  return (
    <Grid item {...props}>
      <Button
        fullWidth
        variant="contained"
        component="label"
      >
        Carregar Foto
        <input
          type="file"
        />
      </Button>
    </Grid>
  )
}