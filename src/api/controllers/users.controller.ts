import UsersService from '../services/users.service';
import { User } from '../../entities/User';
import { Logger } from '../../lib';

class UsersController {
  private ridesService: UsersService;
  constructor(ridesService: UsersService) {
    this.ridesService = ridesService;
  }

  public createUser = async (req:any, res:any, next:any) => {
    try {
      const { body } = req;

      const user = new User(
        username: body.username,
        password: body.
      );

      const rows = await this.ridesService.createRide(ride);

      res.status(statusCodes.CREATED).json(rows);
      return;
    } catch (err) {
      Logger.error(err);
      await next(SOMETHING_WENT_WRONG);
    }
  };

  public getUser = async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      if (page > 0 && limit > 0) {
        const rows = await this.ridesService.getUsersWithOffsetLimit(limit, page);
        if (rows.length !== 0) return res.status(statusCodes.OK).json(rows);
        res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
        return;
      } else {
        const rows = await this.ridesService.getAllUsers();
        if (rows.length !== 0) return res.status(statusCodes.OK).json(rows);
        res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
        return;
      }
    } catch (err) {
      Logger.error(err);
      await next(SOMETHING_WENT_WRONG);
    }
  };

  public getRideById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rows = await this.ridesService.getRide(id);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };

  public deleteRideById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rows = await this.ridesService.deleteRide(id);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };

  public getWithOffsetLimit = async (req, res, next) => {
    try {
      const { limit, offset } = req.params;
      const rows = await this.ridesService.getUsersWithOffsetLimit(limit, offset);
      if (rows) {
        res.status(statusCodes.OK).json(rows);
        return;
      }
      res.status(statusCodes.NOT_FOUND).json(RIDES_NOT_FOUND_ERROR);
      return;
    } catch (err) {
      Logger.error(err);
      return await next(SOMETHING_WENT_WRONG);
    }
  };
}

export default UsersController;