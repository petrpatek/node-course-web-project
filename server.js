const express = require('express');
const hbs= require('hbs');
var app= express();
var underMaintance = false ;
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res, next) => {
    var now = new Date().toString()
    console.log(now)
next()

})
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();

})
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
    })
if (underMaintance) {
    app.get('/', (req, res) => {
        //res.send( '<h1>Hello Express!</h1>')
        res.render('maintenace.hbs', {
        pageTitle: 'Maintenace',
        welcomeMessege: 'Site is under maintance',
    })
})
}
else {
app.get('/', (req, res) => {
    //res.send( '<h1>Hello Express!</h1>')
    res.render('home.hbs', {
        pageTitle: 'Home page',
    welcomeMessege: 'Welcome on our site',
})
})
app.get('/about', ( req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Us',
})
})
app.get('/bad', (req,res) => {
    res.send( {
        error: "Error"
    })
    })
app.get('/projects', (req,res) => {
    res.render('project.hbs', {
        pageTitle: 'Projects',
})
})}
app.listen(port, () => {
    console.log('Server is up on port 3000')
});