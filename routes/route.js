exports.setRoutes = function(app) {
  app.use('/student-index', require('./routers/student-index'));
  app.use('/teacher-index', require('./routers/teacher-index'));
  app.use('/users', require('./routers/users'));
  app.use('/teacher', require('./routers/teacher'));
  app.use('/paperList', require('./routers/paperList'));
  app.use('/paper', require('./routers/paper'));
  app.use('/student-validate', require('./routers/student-validate'));
  app.use('/teacher-validate', require('./routers/teacher-validate'));
  app.use('/questionFill',require('./routers/add-question'));
  app.use('/score',require('./routers/mark-exam'));
};
