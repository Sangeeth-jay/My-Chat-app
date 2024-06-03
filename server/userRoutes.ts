import { Request, Response, Router } from "express";
import { User } from "./userModel";

const router = Router();


router.post("/auth", async (req: Request, res: Response) => {
    const user = new User(req.body);
    console.log(user);

    //save user
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        
    }
})

export default router;