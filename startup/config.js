const config = require("config");

module.exports = function() {
  if (!config.get("jwtPrivateKey")) {
    // throw new Error("FATAL ERROR:jwtPrivateKey not defined");
    console.log("FATAL ERROR:jwtPrivateKey not defined");
    process.exit(1);
  }
};
