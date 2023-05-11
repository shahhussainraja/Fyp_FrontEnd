import GenericServices from "./GenericServices"
// import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

class SellerServices extends GenericServices{
    constructor(){
        super();
    }

    addProductItem = (data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/addProduct",data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }


    login = (email ,password) => {
        return new Promise ((resolve,reject)=>{
            this.post("/signInAsSeller",{email, password}).then((data)=>{
                localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    };

    register = (data) =>this.post("/signUpAsSeller",data);



    newConversation = (data) =>this.post("/newConversation",data)
    
    sendBidMessage = (data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/sendMessage",data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    getOrderDetails = (sellerId) =>{
        return new Promise ((resolve,reject)=>{
            this.get("/getSellerAllOrder/"+sellerId).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
    
    getAllItems = (sellerId) =>{
        return new Promise ((resolve,reject)=>{
            this.get("/getAllItems/"+sellerId).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    } 

    deleteItem = (sellerId,productId) =>{
        return new Promise ((resolve,reject)=>{
            this.get(`/deleteItem?sellerId=${sellerId}&productId=${productId}`).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
    getSellerProfile = (sellerId) =>{
        return new Promise ((resolve,reject)=>{
            this.get("/sellerDetail/"+sellerId).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    changeOrderStatus = (id , data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/changeOrderStatus/"+id,data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    




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