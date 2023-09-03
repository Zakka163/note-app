const {DataTypes} = require('sequelize')
const sequelize = require('../config/koneksi.js')
const User = require('./modelUser.js')
const Note = sequelize.define('note', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true
  },
  // id_user: {
  //   type: DataTypes.STRING
  //   // allowNull defaults to true
  // },
  title: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  data: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  freezeTableName:true
  // Other model options go here
});
User.hasMany(Note,{
  foreignKey: 'id_user'
});
Note.belongsTo(User);

// async function create(){
//   // await Note.sync();
//   // await Note.sync({ force: true })
//   await sequelize.queryInterface.removeColumn("note","userId")
//   // await Note.removeColumn("userId")
//   console.log("The table for the User model was just (re)created!");
// }

// create()

module.exports = Note