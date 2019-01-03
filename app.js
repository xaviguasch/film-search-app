const express = require('express')
const app = express()
const request = require('request')

app.set('view engine', 'ejs')

app.get('/results', function(req, res) {
    request('http://www.omdbapi.com/?s=iowa&tomatoes&apikey=thewdb', function(error, response, body) {
        if (!error && response.statusCode == 200) {    
            const data = JSON.parse(body);
            res.render('results', {data: data})
        }
    })
})





app.listen(3000, 'localhost', function() {
    console.log('Movie app server has started, listening on port 3000, film-aficianado!!!');
})