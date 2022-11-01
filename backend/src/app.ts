import express from 'express';

import cors from 'cors';

import vehicleRouter from './routers/vehicles';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/vehicles', vehicleRouter);

export default app;