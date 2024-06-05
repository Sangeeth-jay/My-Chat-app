import { Request, Response, Router } from "express";
const jwt = require("jsonwebtoken")
import { User } from "./userModel";
import "dotenv/config";

const router = Router();

router.post("/auth", async (req: Request, res: Response) => {
  const user = new User(req.body);
  console.log(user);
  //save user
  try {
    await user.save();
    const accessToken = jwt.sign(
      user.toObject(),
      process.env.ACCESS_TOKEN_SECRET!
    );
    res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

router.get("/user", async (req: Request, res: Response) => {

  try {
    const data = await jwt.verify(
      req.headers.authorization!,
      process.env.ACCESS_TOKEN_SECRET!
    );
    const user = await User.find({email: data?.email});
    res.send(user);
  } catch (error) {
    console.log(error);
    
  }
});

export default router;
