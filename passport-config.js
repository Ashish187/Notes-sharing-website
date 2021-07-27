const localstrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport,getuserbyname,getuserbyid){
    const authenticateuser = async (name,password,done) =>{
        const user = getuserbyname(name)
    if (user == null) {
      return done(null, false, { message: 'No user with that name' })
    }
    try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Password incorrect' })
        }
      }catch(e){
        return done(e)
      }
    }
    passport.use(new localstrategy({ usernameField: 'name' }, authenticateuser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getuserbyid(id))
    })
}

module.exports = initialize