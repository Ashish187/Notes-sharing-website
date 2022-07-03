if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const path = require('path')
const passport = require('passport')
// const mongoose = require('mongoose')
const flash = require('express-flash')
// const bodyparser = require('body-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const methodoverride = require('method-override')
const app = express()

// const url = "mongodb+srv://notes:<password>@cluster0.ivryj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(url,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const schema = new mongoose.Schema(
//     {
//         data: Object,
//     },
//     {
//         collection: "form"
//     }
//     );

    // const Form = mongoose.model("Form",schema);

    // const formData = (bodyData) => {
    //     Form({ data: bodyData }).save((err) => {
    //       if (err) {
    //         throw err;
    //       }
    //     });
    //   };
    //   const urlencodedparser = bodyparser.urlencoded({extended: false})
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    name => users.find(user => user.name === name),
    id => users.find(user => user.id === id)
  )

const PORT = process.env.PORT || 7200
const users = []
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodoverride('_method'))

app.get('/',checkAuthenticated,(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

// app.post('/register',urlencodedparser,(req,res)=>{
//     formData(req.body);
//     res.render('register',{name: req.body.name});
// });

app.get('/login',checkNotAuthenticated,(req,res)=>{
    res.render('login')
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
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

app.post('/register',checkNotAuthenticated,async (req,res)=>{
    try{
    const hashedpassword = await bcrypt.hash(req.body.pwd,10)
    users.push({
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
    console.log(users)
})
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })
  
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/img'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/pdf'))

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})

// mongodb+srv://notes:<password>@cluster0.ivryj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority