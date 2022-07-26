"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes: Sequelize } = require('sequelize');
const usersModel = {
    userId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    loginDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
};
const uesrsOptions = {
    timestamps: false,
    schema: 'public',
    freezeTableName: true,
};
module.exports = (seq) => {
    return seq.define('Rides', usersModel, usersOptions);
};
