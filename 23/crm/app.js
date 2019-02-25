var express 	= require('express');
var bodyParser 	= require('body-parser');
var mysql 		= require('mysql');
var connection 	= require('express-myconnection');
var app 		= express();
var routes 		= require('./routes/index');
var customers 	= require('./routes/customers');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'js_37'
    },'pool') //single
);

app.get('/', 					 routes.index);
app.get('/customers', 			 customers.all);
app.get('/customers/add', 		 customers.add);
app.post('/customers/add', 		 customers.save);
app.get('/customers/edit/:id', 	 customers.edit);
app.post('/customers/edit/:id',  customers.edit_save);
app.get('/customers/delete/:id', customers.delete);

app.listen(3000, function() {
    console.log('Server at localhost:3000');
});