//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');



let newItems =['Buy','Cook'];
let workItems=[];

app.set('view engine', 'ejs'); // set the view engine to ejs

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get("/", function (req, res) {
let day = date.getDay();
res.render('list', {listTitle: day, newListItems:newItems}); // have to put all ejs variables


});

app.post("/",function(req,res){
 let item = req.body.newItem; //newItem is the name in html input
  if(req.body.list==='Work'){

        workItems.push(item)
        res.redirect('/work')
        console.log(workItems);
    } else {
    newItems.push(item)
    res.redirect("/");//redirects to homeroute;
    }
});

app.get('/work' ,function(req,res){
    res.render('list',{listTitle: 'Work List' , newListItems: workItems} )
    });

app.get('/about',function(req,res){
    res.render('about'); //the actual about file
})



app.listen(3000, function () {
    console.log('Listening on port 3000');
});

