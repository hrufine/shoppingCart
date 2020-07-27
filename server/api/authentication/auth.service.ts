import User from './auth.model'
export const AuthService = async (userName:string,password:string)=>{
  const user  = <any>await User.findOne({userName}).lean();
            if (!user) {
              return {status:false}
            } else {
                if(password == user.password){
                    return {status:true}
                }
                return {status:false}

            } 
}