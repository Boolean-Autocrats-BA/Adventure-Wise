const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "reving9000!rpm";
const password2 = "hjb7yt97";

// GENERATES HASH with 2 functions
bcrypt.genSalt(saltRounds, function (err, salt) {
   bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
   });
});

// GENERATES SAME RESULT AS ABOVE BUT ONE FUNCTION NOT SURE HOW
bcrypt.hash(password2, saltRounds, function (err, hash) {
   // Store hash in database here
   bcrypt.compare(password2, hash, function (err, result) {
      if (result) {
         console.log("It matches!");
      } else {
         console.log("Invalid Password!");
      }
   });
});
