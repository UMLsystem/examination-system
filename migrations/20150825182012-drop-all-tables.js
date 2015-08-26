module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.showAllTables().then(function(tableNames) {
      tableNames.forEach(function(val) {
        if (val !== SequelizeMeta) {
          queryInterface.dropTable(val);
        }
      });
    });
  },

  down: function (queryInterface, Sequelize) {

  }
}; 
