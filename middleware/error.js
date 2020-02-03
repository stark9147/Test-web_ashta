module.exports = function(err, req, res, next) {
  console.log("Error msg: ", err.message);

  res.status(500).send("Something Failed");
};
