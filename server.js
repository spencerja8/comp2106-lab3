/**
 * Created by Spencer Jackson on 2016-09-25.
 */

var connect = require('connect');
var url = require('url');


var app = connect();

var calculate = function(req, res, next) {

    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if(method == 'add')
    {
        var answer = parseFloat(x)+parseFloat(y);

        res.end(x + ' + ' + y + ' = ' + answer);
    }

    else if (method == 'subtract')
    {
        var answer = parseFloat(x)-parseFloat(y);

        res.end(x + ' - ' + y + ' = ' + answer);
    }

    else if (method == 'multiply')
    {
        var answer = parseFloat(x)*parseFloat(y);

        res.end(x + ' * ' + y + ' = ' + answer);
    }

    else if (method == 'divide')
    {
        var answer = parseFloat(x)/parseFloat(y);

        res.end(x + ' / ' + y + ' = ' + answer);
    }

    else
    {
        res.end('Error');
    }
}

app.use('/lab3', calculate);

app.listen(3000);