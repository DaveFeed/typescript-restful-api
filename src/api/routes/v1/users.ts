import * as express from 'express';
const usersRouter = express.Router();


//To first understand how this works need to check the middleware, why is controller used, 
//how does it know which functions to declare and implement, where do all the functions that controller
//has get listed



import * as usersValidator from '../../middlewares/users.middleware';
import models from '../../../db/models';
import UsersController from '../../controllers/users.controller';
import UsersService from '../../services/users.service';
import { UsersRepository } from '../../../repositories/users.repository';

const usersRepository = new UsersRepository(models.Users);
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

usersRouter.post('/', usersValidator.createUser, usersController.createUser);

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/:id', usersValidator.getUsers, usersController.getRideById);

usersRouter.delete('/:id', usersValidator.deleteRide, usersController.deleteRideById);
*/
export { usersRouter };