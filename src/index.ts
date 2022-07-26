import { Logger } from './lib';
import { app } from './app';

const port = 3000;
const host = process.env.HOST ? `${process.env.HOST}` : `http://localhost:${port}`;

export const bootsrap = () => {
  try {
    Logger.info(host);
    app.listen(port, () => Logger.info(`App started and listening on port ${port}`));
  } catch (error) {
    Logger.error(error);
  }
};
bootsrap();

//https://github.com/sargsyanvlad/RESTAPI_EXAMPLE/
