const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  creationUser,
  updateUser,
  registerUser,
  login,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", deleteUserById);
userRouter.post("/", creationUser);
userRouter.put("/:id", updateUser);

userRouter.post("/register", registerUser);
userRouter.post("/login", login);

module.exports = userRouter;


//register post 
// http://localhost:3000/api/users/register

//login post
// http://localhost:3000/api/users/login