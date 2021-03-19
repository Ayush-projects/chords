const rateLimit = require('express-rate-limit');

const limit = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100, 
    message:
      "Too many accounts created from this IP, please try again after an hour"
  });

  module.exports = limit;