import express from 'express';
import * as bodyParser from 'body-parser';
import { errorController } from './api/controllers/error.controller';
import { v1Router } from './api/routes/v1';
//import { v2Router } from './api/routes/v2';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => res.send('Healthy'));

app.use('/v1', v1Router);
//app.use('/v2', v2Router);

app.use((err:any, req:any, res:any, next:any) => {
  errorController(err, res, next);
});