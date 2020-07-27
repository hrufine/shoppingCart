import { DashboardService } from "./dashboard.service";
export const DashboardController = async (req: any,res: any)=>{
        const result = await DashboardService();
        res.json(result);
}
