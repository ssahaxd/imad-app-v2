var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    "article-one": {
        title:'Article One | Sandip Saha',
        heading:'Article One',
        date:'Feb 16, 2017',
        content:`
            <p>This content is injected in the in the HTML template by java script, This content is going to be long enough so the user can read something if he or she wants to do so.</p>
            <p>This is the first article and this article is not a html file, instade it is a java script injection</p>
        `
    },
    "article-two":{
        title:'Article Two | Sandip Saha',
        heading:'Article Two',
        date:'Feb 20, 2017',
        content:`
            <p>This article is known as article two, and this is also a java script injection</p>
            <p>some extra text bla bla bla xoxo</p>
        `
    },
    "article-three":{
        title:'Article Three | Sandip Saha',
        heading:'Article Three',
        date:'Feb 25, 2017',
        content:`
            <p>This article is known as article three, and this is also a java script injection</p>
            <p>some extra text bla bla bla xoxo</p>
        `
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
        `
        <!DOCTYPE html>
            <html>
                <head>
                    <title>${title}</title>
                    <meta name="viewport" content = " width = device-width, initial-scale=1"> 
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="container">
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h3>${header}</h3>
                        <div>${date}</div>
                        <div>    
                            ${content}
                        </div>    
                    </div>
                </body>
            
            </html>

        `;
    return htmlTemplate;
}


app.get('/:articleName',function (req, res){
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
