const {DataTypes} = require('sequelize')
const sequelize = require('../config/koneksi.js')

const User = sequelize.define('user', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true
  },
  user_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  freezeTableName:true
  // Other model options go here
});

// async function create(){
//   // await User.sync();
//   await User.sync({ force: true })
//   console.log("The table for the User model was just (re)created!");
// }

// create()

module.exports = User