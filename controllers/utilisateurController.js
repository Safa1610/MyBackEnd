const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// get all users
// localhost:3000/api/users/all (get)
async function getAllUsers(req, res) {
  const allusers = await user.find();
  return res.status(200).json(allusers);
}

// get user by id
// localhost:3000/api/users/:id (get)
async function getUserById(req, res) {
  const { id } = req.params;
  //   const theuser = user.find({ _id: id }); // array
  //   const theuser = user.findOne({ _id: id }); // element 1
  const theuser = await user.findById(id); // element 1
  return res.status(200).json(theuser);
}

// Effacer l'user by id
// localhost:3000/api/users/:id (delete)
async function deleteUserById(req, res) {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  return res.status(200).json({ message: "Success deletion" });
}

// creation l'user
// localhost:3000/api/users (post)
async function creationUser(req, res) {
  const { firstname, lastname, birthday, age, isActive } = req.body;
  await user.create({
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    age: age,
    isActive: isActive,
  });
  return res.status(201).json({ message: "user Added" });
}

// update user by id
// localhost:3000/api/users/:id (put)
async function updateUser(req, res) {
  const { id } = req.params;
  const { firstname, lastname, birthday, age, isActive } = req.body;
  await user.findByIdAndUpdate(id, {
    $set: { firstname, lastname, birthday, age, isActive },
  });
  return res.status(200).json({ message: "user updated" });
}



//REGISTER / LOGIN

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existantUser = await user.findOne({
      $or: [{ username: username, email: email }],
    });
    if (existantUser)
      return res
        .status(402)
        .json({ messaage: "email or username already exist" });

    const newUser = new user({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save();
    return res.status(201).json(newUser);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existant = await user.findOne({ username });
    if (!existant) return res.status(404).json({ message: "user not existed" });
    const comparedPassword = await bcrypt.compare(password, existant.password);
    if (!comparedPassword)
      return res.status(400).json({ message: "invalid credentials" });

    const token = jwt.sign({ id: existant._id }, "PRIVATE_KEY", {
      expiresIn: "7d",
    });
    return res.status(200).json(token);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};


module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    creationUser,
    updateUser,
    registerUser,
    login,
  };
  