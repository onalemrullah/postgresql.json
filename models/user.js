const Sequelize=require('sequelize')
const db=require('../config/database.js')

const User=db.define('users',{
    first_name:{
        type:Sequelize.STRING
    },
    last_name:{
        type:Sequelize.STRING
    },
})
module.exports=User