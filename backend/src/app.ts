import express from 'express';

import cors from 'cors';

import vehicleRouter from './routers/vehicles';
import userRouter from './routers/users';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/vehicles', vehicleRouter);
app.use('/users', userRouter);

export default app;