exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/users', require('./routers/users'));
  app.use('/teacher', require('./routers/teacher'));
  app.use('/paperList', require('./routers/paper-list'));
  app.use('/paper', require('./routers/paper'));
  app.use('/user-validate', require('./routers/user-validate'));
  app.use('/score',require('./routers/mark-exam'));
  app.use('/insertFill', require('./routers/add-fillBlank.js'));
  app.use('/password',require('./routers/password'));
  app.use('/insertMultiple', require('./routers/add-multiple.js'));
  app.use('/insertSingle', require('./routers/add-single.js'));
  app.use('/password',require('./routers/password'));
  app.use('/addquestion', require('./routers/addQuestion.js'));

};
