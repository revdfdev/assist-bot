const express = require('express');
const parser = require('body-parser');

const rest = express();

rest.use(parser.urlencoded({
    extended: true
}));

rest.use(parser.json());

rest.post('/google_now_bot', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.message ? req.body.result.parameters.message : "Seems like some problem. Speak again."
        res.json({
            message: speech,
            displayText: speech,
            source: 'rehan-bot' 
        });
});
