import { AuthService } from "./auth.service";
export const AuthController = async (req: any,res: any)=>{
      //Login User.........................
        const result = await AuthService(req.body.userName,req.body.password);
        res.json(result);
}
