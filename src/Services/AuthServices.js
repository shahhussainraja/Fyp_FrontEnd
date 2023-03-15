import GenericServices from "./GenericServices"
// import jwt_decode from "jwt-decode";

class AuthServices extends GenericServices{
    constructor(){
        super();
    }

    login = (email ,password) => {
        return new Promise ((resolve,reject)=>{
            this.post("/signInAsBuyer",{email, password}).then((token)=>{
                localStorage.setItem("token",token)
                window.location.reload();
                window.location.href="/";
                resolve(token);
            }).catch((err)=>{
                reject(err);
            })
        })
    };

    register = (data) =>this.post("/signUp",data);

    logOut = ()=>{
        localStorage.clear();
        window.location.reload();
        window.location.href="/";
    }
    
    isLogged = ()=>{
        return localStorage.getItem("token")? true : true ;
    }

    currentUser = () =>{
        return new Promise ((resolve,reject)=>{
            this.get("/currentUser").then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    conversation = (userId) =>{
        return new Promise ((resolve,reject)=>{
            this.get("/conversation/"+userId).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    sendMessage = (data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/sendMessage",data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }










    // isAdmin = ()=>{
        
    //     let token = localStorage.getItem("token");
    //      if(!token)
    //         return false;
        
    //     let decoded = jwt_decode(token);
    //     if(decoded.role == "admin")
    //         return true;

    //     return false;
    // }

    


}

let authServices = new AuthServices();
export default authServices;