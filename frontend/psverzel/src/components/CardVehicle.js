import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardVehicle({vehicle}) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/image.jpg"
          alt="imagem de um veículo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${vehicle.brand} ${vehicle.carModel} ${vehicle.name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
