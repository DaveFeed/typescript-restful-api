export const errorController = (err: any, res: any, next: any) => {
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