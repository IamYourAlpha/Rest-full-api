var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listU', function(req, res) {
  fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err, data) {
    var dat = JSON.parse( data );

  //  console.log( dat [ 'user1'] );  /* if you want to access single element
    res.send( data );
  });
})


var pData = {
  "user4" : {
    "name" : "Peter",
    "occupation" : "Photography",
    "location" : "USA"
  }
}

app.post('/postU', function(req, res) {
  fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err, data) {
    if (err) {
      console.log("Error reading the file");
    }

    data = JSON.parse( data );
    data ["user4"] = pData["user4"];
    console.log( data["user4"] );
    res.end(JSON.stringify( data ));
  })
})

app.get('/:id', function(req, res) {
  fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err, data) {
    var users = JSON.parse( data );
    var user =  users[ "user"+req.params.id ];
    console.log(user);
    res.end( JSON.stringify(user) );
  })
})

app.delete('/deleteUser/:id', function(req, res){
  fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data) {
    if(err) console.log("error reading file");
    data = JSON.parse( data );
    console.log("Deleted :"+data["user"+req.params.id]);
    delete data["user"+req.params.id];
    console.log(data);
    res.end( JSON.stringify( data ));
  })
})



app.listen(3000, function(err){
  console.log("Listening to the port 3000");
})
