import GenericServices from "./GenericServices"
// import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

class SellerServices extends GenericServices{
    constructor(){
        super();
    }

    // login = (email ,password) => {
    //     return new Promise ((resolve,reject)=>{
    //         this.post("/signInAsBuyer",{email, password}).then((data)=>{
    //             localStorage.setItem("token",data.token)
    //             resolve(data);
    //         }).catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // };

    register = (data) =>this.post("/signUpAsSeller",data);

    // isLogged = ()=>{
    //     return localStorage.getItem("token")? true : false ;
    // }

    // currentUser = () =>{
    //     return new Promise ((resolve,reject)=>{
    //         this.get("/currentUser").then((res)=>{
    //             resolve(res);
    //         }).catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // }

    // conversation = (userId) =>{
    //     return new Promise ((resolve,reject)=>{
    //         this.get("/conversation/"+userId).then((res)=>{
    //             resolve(res);
    //         }).catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // }

    // sendMessage = (data) =>{
    //     return new Promise ((resolve,reject)=>{
    //         this.post("/sendMessage",data).then((res)=>{
    //             resolve(res);
    //         }).catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // }










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

let sellerServices = new SellerServices();
export default sellerServices;