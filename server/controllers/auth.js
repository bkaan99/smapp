const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



const register = async (req, res) => {

  try {

    const { username, email, password } = req.body;

    const user = await AuthSchema.findOne({ email }); // email check


    if (user) {
      return res
      .status(500)
      .json({ msg: "Kullanıcı Zaten var!" });
    }


    if (password.length < 6) {
      // password length check
      return res
      .status(500)
      .json({ msg: "Şifre en az 6 karakter olmalıdır!" });
    }


    const passwordHash = await bcrypt.hash(password, 12); // password hashing


    if (!isEmail(email)) {
      // email check
      return res
        .status(500)
        .json({ msg: "Lütfen geçerli bir email adresi giriniz!" });
    }


    const newUser = new AuthSchema.create({
      username,
      email,
      password: passwordHash,
    });


    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    })

    res.status(201).json({
      status: "OK",
      newUser,
      token,
    });


    if (!username || !email || !password) {
      return res.status(500).json({ msg: "Lütfen tüm alanları doldurun!" });
    }


  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }

};


const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await AuthSchema.findOne(email); // email check

    if(user) {
      return res.status(500).json({ msg: "Böyle bir Kullanıcı bulunamadı!" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password); // password check

    if(!passwordCompare) {
      return res.status(500).json({ msg: "Girdiğiniz şifre yanlış!" });
    }

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    })

    res.status(200).json({
      status: "OK",
      user,
      token
    });

  } 
  catch (err) {}

};


function isEmail(emailAdress) {
  // email check
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAdress);

  if (emailAdress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { register, login };
