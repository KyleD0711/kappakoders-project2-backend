const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const Courses = sequelize.define("courses", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dept: {
        type: Sequelize.STRING(4),
      },
      courseNumber: {
        type: Sequelize.STRING(9)
      },
      level:{
        type: Sequelize.STRING(1)
      },
      hours: {
        type: Sequelize.STRING(1)
      },
      name: {
        type: Sequelize.STRING(45)
      },
      description: {
        type: Sequelize.STRING
      }
    }, {
        timestamps: false // Disable timestamps
    });
    return Courses;
  };