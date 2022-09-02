const Sequelize = require('sequelize');
const db = require('./database')

const Campus = db.define('campuses',{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    },  
    imageUrl: {
        type: Sequelize.STRING,
        isUrl: true,
        defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true,
        defaultValue: "description",
    }
})

module.exports = Campus;