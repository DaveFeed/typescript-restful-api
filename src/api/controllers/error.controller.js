"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
const errorController = (err, res, next) => {
    const { error_code, message } = err;
    let statusCode = 400;
    if (error_code) {
        statusCode = error_code;
    }
    return res.status(statusCode).json({
        error_code,
        message,
    });
};
exports.errorController = errorController;
