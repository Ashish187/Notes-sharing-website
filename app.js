const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const app = express()

const PORT = process.env.PORT || 7200
const records = []
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/ash',(req,res)=>{
    res.render('ash')
})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/1st',(req,res)=>{
    res.render('1st')
})
app.get('/2nd',(req,res)=>{
    res.render('2nd')
})
app.get('/3rd',(req,res)=>{
    res.render('3rd')
})
app.get('/4th',(req,res)=>{
    res.render('4th')
})
app.get('/5th',(req,res)=>{
    res.render('5th')
})
app.get('/6th',(req,res)=>{
    res.render('6th')
})
app.get('/7th',(req,res)=>{
    res.render('7th')
})
app.get('/8th',(req,res)=>{
    res.render('8th')
})
app.get('/ada',(req,res)=>{
    res.render('ada')
})
app.get('/maths',(req,res)=>{
    res.render('maths')
})
app.get('/toc',(req,res)=>{
    res.render('toc')
})
app.get('/arm',(req,res)=>{
    res.render('arm')
})
app.get('/oops',(req,res)=>{
    res.render('oops')
})
app.get('/unix',(req,res)=>{
    res.render('unix')
})

app.post('/register',async (req,res)=>{
    try{
    const hashedpassword = await bcrypt.hash(req.body.pwd,10)
    records.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword
    })
    res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
    console.log(records)
})

app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/img'))
app.use(express.static(__dirname + '/js'))

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})