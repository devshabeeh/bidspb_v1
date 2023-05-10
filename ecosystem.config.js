module.exports = {
  apps : [{
    name        : "myapp",
    script      : "./server.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
CLIENT_ID: "939680617126-saq66dsvq6d7adf436vjofalh6a5q6tm.apps.googleusercontent.com",
ClIENT_SECRET : "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",
CLIENT_URL :'http://user.bidspek.com:3000',


LINKEDIN_CLIENT_ID:"77q7xrn32mmv0d",
LINKEDIN_CLIENT_SECRET:"MyAC0HJfyj3fRQtL"
    },
    env_production : {
      "NODE_ENV": "production",
CLIENT_ID: "939680617126-saq66dsvq6d7adf436vjofalh6a5q6tm.apps.googleusercontent.com",
ClIENT_SECRET : "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",
CLIENT_URL :'http://user.bidspek.com:3000',


LINKEDIN_CLIENT_ID:"77q7xrn32mmv0d",
LINKEDIN_CLIENT_SECRET:"MyAC0HJfyj3fRQtL"
    }
  }]
}
