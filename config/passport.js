// var JwtStartegy = require('passport-jwt').Strategy
// var ExtractJwt = require('passport-jwt').ExtractJwt

import JwtStrategy from 'passport-jwt/lib/strategy'
import { ExtractJwt } from 'passport-jwt/lib'

// var User = require('../models/user')
// var config = require('./dbconfig')
import User from '../models/user.js'

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.find({
            id: jwt_payload.id
        },
            function (err, user) {
                if (err) {
                return done(err, false)
                }
                if (user) {
                    return done(null, user)
                }
                else {
                  return done(null, false)  
                }
        }
        )
    }))
}