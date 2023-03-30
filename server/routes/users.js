var express = require("express");
var router = express.Router();
userService = require("../services/userService");

/* GET users listing. */
router.get("/", function (req, res) {
  userService.getAll().then((result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
