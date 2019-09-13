var team = require('../models/team');

exports.index = function(req, res) {
    res.send('Team index');
}

exports.add = function(req, res) {

    var new_team = new team({
        user: 'Admin',
        action: 'insert data2'
    });
    
    console.log(new_team);
    new_team.save(function(err){
      if(err) console.log(err); 
    });


    res.send('Team add');
}

exports.add_sql = function(req, res) {
    res.send('Team add');
}


exports.update = function(req, res) {
    res.send('Team update');
}

exports.delete = function(req, res) {
    res.send('Team delete');
}