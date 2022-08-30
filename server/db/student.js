const Sequelize = require('sequelize');
const db = require('./database')

const Student = db.define('students',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        isEmail: true,
    },  
    imgaeUrl: {
        type: Sequelize.STRING,
        isUrl: true,
        defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
    },
    gpa: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
})

module.exports = Student;