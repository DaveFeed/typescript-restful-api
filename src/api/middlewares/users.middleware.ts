const Validator = require('fastest-validator');
import { Users } from '../validation/schemas/Users';
enum HTTP_STATUS{
    NOT_FOUND = 404,
    SOMETHING_WENT_WRONG = 409,
    BAD_REQUEST = 400,
    CREATED = 201,
    OK = 200,
  }

const isValidated = function (validationResult: any) {
  if (Array.isArray(validationResult)) {
    return {
      error_code: 'VALIDATION_ERROR',
      message: validationResult,
    };
  }
  return true;
};

export const createUser = (req:any, res:any, next:any) => {
  const v = new Validator();
  const check = v.compile(Users.create);
  const checkResult = check(req.body);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(isValid);
  }
};

export const getUser = (req:any, res:any, next:any) => {
  const v = new Validator();
  const check = v.compile(Users.get);
  const checkResult = check(req.params);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(isValid);
  }
};

export const deleteUser = (req:any, res:any, next:any) => {
  const v = new Validator();
  const check = v.compile(Users.delete);
  const checkResult = check(req.params);
  const isValid = isValidated(checkResult);

  if (isValid === true) {
    next();
  } else {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(isValid);
  }
};