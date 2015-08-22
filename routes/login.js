var app = require('../app.js');
var mysql = require('mysql');
var connection;

app.get('*', function(res, req, next) {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '000000',
    database: 'testproject'
  });
  connection.connect(function(err) {
    next();
  });
});

app.get('/',function(req,res){
  res.sendfile('login.hbs');
});

app.get('/login',function(req,res){
  console.log(req.query);
  var student = req.query;
  connection.query('select * from student where stu_num ='+parseInt(student.username),function(err,rows){
    if (err) throw err;
    console.log(rows);
    if(rows.length >0 && rows[0].stu_pwd === student.password){
      res.send({student:rows[0]});
      connection.end();
    }
  });
});

app.listen(3002,function(){
  console.log(3002);
});
