import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Configure database connection
const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: 33061,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
