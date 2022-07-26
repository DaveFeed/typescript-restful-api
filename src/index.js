"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootsrap = void 0;
const lib_1 = require("./lib");
const app_1 = require("./app");
const port = 3000;
const host = process.env.HOST ? `${process.env.HOST}` : `http://localhost:${port}`;
const bootsrap = () => {
    try {
        lib_1.Logger.info(host);
        app_1.app.listen(port, () => lib_1.Logger.info(`App started and listening on port ${port}`));
    }
    catch (error) {
        lib_1.Logger.error(error);
    }
};
exports.bootsrap = bootsrap;
(0, exports.bootsrap)();
