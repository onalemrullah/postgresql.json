const {Sequelize}=require('sequelize')

module.exports=new Sequelize('BigDb','postgres','emrullah',{
    host:'localhost',
    dialect:'postgres'
})