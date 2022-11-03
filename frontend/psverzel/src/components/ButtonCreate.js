import { Button, Grid } from '@mui/material'
import React from 'react'

export default function ButtonCreate(props) {
  return (
    <Grid item {...props}>
      <Button
        fullWidth
        variant="contained"
      >
        {props.text}
      </Button>
    </Grid>
  )
}