// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

Campus.hasMany(Student);
Student.belongsTo(Campus);



const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database

    const fordham = await Campus.create({name: 'Fordham University', address: 'The Bronx', description:'A college in the Bronx'});
    const brendan = await Student.create({firstName: 'Brendan', lastName: 'Brozen', email: 'bbrozen@fordham.edu', gpa: 3.6, campusId: fordham.id});

    console.log(`
    Seeding successful!
  `);
};



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,

}