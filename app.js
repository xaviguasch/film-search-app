const express = require('express')
const app = express()
const request = require('request')

app.get('/results', function(req, res) {
    request('http://www.omdbapi.com/?s=california&tomatoes&apikey=thewdb', function(error, response, body) {
        if (!error && response.statusCode == 200) {    
            const results = JSON.parse(body);
            res.send(results['Search'][0]['Title'])
        }
    })
})





app.listen(3000, 'localhost', function() {
    console.log('Movie app server has started, listening on port 3000, film-aficianado!!!');
})