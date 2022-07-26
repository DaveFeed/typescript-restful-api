import * as express from 'express';
import { usersRouter } from './users';

const v1Router = express.Router();

v1Router.use('/users', usersRouter);

export { v1Router };