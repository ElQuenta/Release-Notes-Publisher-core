import express, { Application} from 'express';

import userRouter from './routes/userRoutes';
import authRouter from './routes/authRoutes';

const app: Application = express()

app.use(express.json());
app.use('/user', userRouter)
app.use('/auth', authRouter)



export default app;