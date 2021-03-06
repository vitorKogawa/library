require('../config/env');

const development = {
    username: process.env.MYSQL_DEV_USERNAME,
    password: process.env.MYSQL_DEV_PASSWORD,
    database: process.env.MYSQL_DEV_DATABASE,
    host: process.env.MYSQL_DEV_HOSTNAME,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const test = {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
};

const production = {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: '',
};

const databaseConfig = {};
databaseConfig.development = development;
// databaseConfig.test = test;
// databaseConfig.production = production;

module.exports = development;