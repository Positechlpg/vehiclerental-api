const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT,
      pool: {
          max: 50,
          min: 10,
          acquire: 60000,
          idle: 10000,
      },
      dialectOptions: {
          maxPreparedStatements: 100
      },
  }
);

module.exports= db