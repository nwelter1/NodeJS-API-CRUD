const router = require('express').Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const knex = require('../knex-config');

/**
 * Create User Helper function
 * @param first_name
 * @param last_name
 * @param email
 * @param password
 */

 function createUser(first_name,last_name, email,password){
     return knex('users')
        .insert({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        })
        .then(result => {
            return result
        })
 }

 router.post('/register', (req,res) => {
     let first_name = req.body.first_name;
     let last_name = req.body.last_name;
     let email = req.body.email;
     let password = req.body.password;
     let hash = bcrypt.hashSync(password)

     createUser(first_name,last_name,email,hash);

     res.json({ status: 'Success - Registered', body: `${first_name} ${last_name}`})
 })

 /**
  * Helper function for comparing password and password hash
  * @param password
  * @param passwordHash
  * 
  * Compare password given by user, to the paswordHash inside of the Database
  * If the password equals the hash then return passwordHash
  * If not, return 'Auth Failed'
  */

  async function comparePass(password,passwordHash){
      const passMatch = await bcrypt.compare(password,passwordHash)

      if(passMatch){
          return passwordHash
      }else {
          return 'Auth Failed'
      }
  }

  // Login Route

  router.post('/login', (req,res) => {
      knex('users')
      .where({email: req.body.email})
      .select('password','email','first_name')
      .then(result => {
          if(!result || !result[0]){
              return 'Auth Failed'
          }

          let verifiedPass = comparePass(req.body.password, result[0].password);

          if(verifiedPass){
              let token = jwt.sign({
                  email: result[0].email,
                  firs_name: result[0].first_name,
                  time: new Date().toLocaleTimeString()
              }, process.env.JWT_SECRET, {
                  expiresIn: '1hr'
              })
              res.json({status: 'Success', token: token})
          } else {
              res.json({status: 'Auth Failed'})
          }
      })
  })
module.exports = router
