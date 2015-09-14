var express   = require('express'),
    Docker    = require('dockerode'),
    app       = express();
    
var docker = new Docker();

app.set('view engine', 'jade');
app.set('views', 'app/views');
app.use(express.static('app/public'));

app.get('/', function(req, res) {
    docker.listContainers(function(err, results) {
      res.render('index', { title: 'Containers', containers: results });
    });
});

app.get('/containers/:id', function(req, res) {
  var id = req.params.id,
      container = docker.getContainer(id);
      
  container.inspect(function(err, data) {
    res.send(data);
  });
});

app.listen(8000, '0.0.0.0', function() {
   console.log('Server started!');
});