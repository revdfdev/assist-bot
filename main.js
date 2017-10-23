const express = require('express');
const parser = require('body-parser');

const rest = express();

rest.use(parser.urlencoded({
    extended: true
}));

rest.use(parser.json());

rest.post('/google_now_bot', function(req, res) {
    if (!req.body) {
        var speech = "It seems like there is a problem"
        res.json({
            message: speech,
            displayText: speech,
            source: 'rehan-bot' 
        });
    }
});
