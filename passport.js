const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

// const { config } = require("config");
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: "939680617126-saq66dsvq6d7adf436vjofalh6a5q6tm.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: "77q7xrn32mmv0d",
      clientSecret: "MyAC0HJfyj3fRQtL",
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
      profileFields: ["id", "first-name", "last-name", "email-address"],
    },
    // function (token, tokenSecret, profile, done) {
    //   return done(null, profile);
    // }
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
