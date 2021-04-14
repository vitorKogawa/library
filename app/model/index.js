const { database, username, password, host, dialect, pool } = require('../config/db.config')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(database, username, password, { host, dialect, pool });

const connection = {};
connection.Sequelize = Sequelize;
connection.sequelize = sequelize;
connection.Livro = require('../model/livro.model')(sequelize, Sequelize);
connection.Locatario = require('../model/locatario.model')(sequelize, Sequelize);

module.exports = connection;