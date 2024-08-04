const express = require('express')
const app = express()

const qs = require('querystring');
var jwt = require('jsonwebtoken');
const PORT = 300

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
let chesh1 =''
let json1 = ''
app.get('/',(req,res) =>{
    res.render('index',{chesh:chesh1,json:json1})
})

app.post('/chesh',(req,res) =>{
    let string = req.body.chesh.replace(/\s+/g, '')
    let decoded = jwt.verify(string, 'shhhhh');
    chesh1 = string
    json1 = decoded.foo;  
   
   res.redirect('/')
})
app.post('/json',(req,res) => {
   let string = req.body.json.replace(/\s+/g, '')
   
    var token2 = jwt.sign( {foo:string} , 'shhhhh');
    json1 = string
    chesh1 =  token2

    res.redirect('/')
})

app.listen(PORT,() =>{
    console.log(`server working to ${PORT} port`)
})