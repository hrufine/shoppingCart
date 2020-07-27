import Dashbaord from './dashboard.model'
export const DashboardService = async ()=>{
  const list  = await Dashbaord.find().limit(10);
  return list;
}