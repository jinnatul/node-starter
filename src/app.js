import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import Router from './routes/Router';
import GlobalErrorHandler from './utils/errors/GlobalErrorHandler';
import SendMessage from './utils/responses/SendMessage';

const app = express();

// Middleware
app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

// Router
app.get('/', (req, res, next) => {
    SendMessage(res, "Welcome to node app :), Build by Morol")
});
app.use('/api/v1', Router);
app.get('/docs', (req, res) => {
    res.redirect('');
});
app.all('*', (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on this server!`);
    error.statusCode = 404;
    error.flag = true;
    return next(error);
});

// Error handler
app.use(GlobalErrorHandler);

export default app;
