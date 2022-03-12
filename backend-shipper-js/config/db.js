require('dotenv').config();
exports.config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      freezeTableName: true
    },
    pool: {
      max: 100,
      min: 10,
      acquire: 30000,
      idle: 10000
    },
    dialect: process.env.DB_DIALECT,
    timezone: '+07:00'
};