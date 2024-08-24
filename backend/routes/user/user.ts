import { Router, Request, Response } from "express";
import {
  CheckIfUserPresent,
  sendEmailToUser,
  userSignupForminputValidation,
  verifySecurityCode,
} from "./middlewares/user-signup-middlewares&functions";
import { Users } from "../../db/db";

export const userRoute: Router = Router();

// Signup Route
userRoute.post(
  "/signup",
  userSignupForminputValidation(),
  CheckIfUserPresent(),
  async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const emailStatus = await sendEmailToUser(email, username);

    console.log(emailStatus.success);
    console.log(emailStatus.msg);

    if (emailStatus.success) {
      await Users.create({
        Username: username,
        Password: password,
        Email: email,
        SecurityCode: emailStatus.securityCode?.toString(),
      });
    }

    res
      .status(201)
      .json({ message: emailStatus.msg, success: emailStatus.success });
  }
);
userRoute.post("/verifysecuritycode", async (req: Request, res: Response) => {
  const { email, securitycode } = req.body;
  const verification = await verifySecurityCode(email, securitycode);
  if (verification.success) {
    res.json({
      msg: `Account created successfully signin now!`,
      success: true,
    });
  } else {
    await Users.deleteOne({
      Email: email,
    });
    res.json({
      msg: `Invalid Securitycode! Signup again`,
      success: true,
    });
  }
});
