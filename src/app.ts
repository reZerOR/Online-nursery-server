import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Save trees!');
});

app.use(globalErrorHandler);
app.use(notFound)

export default app;