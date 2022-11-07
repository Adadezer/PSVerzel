import express from 'express';

import cors from 'cors';

import vehicleRouter from './routers/vehicles.routes';
import userRouter from './routers/users.routes';
import loginRouter from './routers/login.routes'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/vehicles', vehicleRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;