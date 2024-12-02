const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSignUp = async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({ message: "Email, password, and username are required" });
    }

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "Email already exists" });
    }

    let usernameExists = await User.findOne({ username });
    if (usernameExists) {
        return res.status(400).json({ error: "Username already exists" });
    }

    const hashPwd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email,
        password: hashPwd,
        username
    });

    let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token, user: newUser });
};

const userLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" })
    }
    let user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
        let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY)
        return res.status(200).json({ token, user})
    }
    else {
        return res.status(400).json({ error: "Invaild credientials" })
    }
}

const getUser = async (req, res) => {
      const user = await User.findById(req.params.id);
      res.json({
        username: user.username,
        email: user.email,
      });
  };

module.exports = { userLogin, userSignUp, getUser }