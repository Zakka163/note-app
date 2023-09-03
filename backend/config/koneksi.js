const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('noteapp', 'postgres', 'root', {
  host: 'localhost',
  port:5431,
  dialect:'postgres' 
});

async function connect(){
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

// connect()

module.exports = sequelize