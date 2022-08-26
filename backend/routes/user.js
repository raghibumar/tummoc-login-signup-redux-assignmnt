const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const verify = require("../verify");
var CryptoJS = require("crypto-js");

/* Login */
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(401).json("Enter a valid email");
    var bytes = CryptoJS.AES.decrypt(user.password, "hellohowareyou");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText);
    if (originalText !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

    const accessToken = jwt.sign(
      {
        id: user.id
      },
      "hellopass",
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    return res.status(200).json({ ...info, accessToken });
  } catch (error) {
    return res.status(500).json(error);
  }
});

/* Sign up */
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "hellohowareyou"
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json({
      status: "succes",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
