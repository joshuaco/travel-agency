import Sequelize from 'sequelize';

// Configure database connection
const db = new Sequelize('agencia_viajes', 'root', 'root', {
  host: 'localhost',
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
