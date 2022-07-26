let seq = require('sequelize');
const { DataTypes: Sequelize } = seq;

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

const usersOptions = {
  timestamps: false,
  schema: 'public',
  freezeTableName: true,
};

module.exports = (seq:any) => {
  return seq.define('Rides', usersModel, usersOptions);
};