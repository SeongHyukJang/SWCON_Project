var request = require('request');

var options = {
    url: 'http://localhost:8000/html'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body);
    }
}

request(options, callback);