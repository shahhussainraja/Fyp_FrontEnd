import GenericServices from "./GenericServices"
// import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

class AuthServices extends GenericServices{
    constructor(){
        super();
    }

    login = (email ,password) => {
        return new Promise ((resolve,reject)=>{
            this.post("/signInAsBuyer",{email, password}).then((data)=>{
                localStorage.setItem("token",data.token)
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    };

    register = (data) =>this.post("/signUpAsBuyer",data);

    logOut = ()=>{
        localStorage.clear();
        window.location.reload();
        window.location.href="/";
    }
    
    isLogged = ()=>{
        return localStorage.getItem("token")? true : false ;
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


    sendPost = (data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/uploadPost",data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }


    fetchAllPost = ()=>{
        return new Promise ((resolve,reject)=>{
            this.get("/fetchAllPost").then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })

    }

    //to get gateway token form user
    getToken = () =>{
        return new Promise ((resolve,reject)=>{
            this.get("/getToken").then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    makePayment = (data) =>{
        return new Promise ((resolve,reject)=>{
            this.post("/makePayment",data).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }


    getOrderDetails = (buyerId) =>{
        return new Promise ((resolve,reject)=>{
            this.get("/getBuyerAllOrder/"+buyerId).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
    
    searchData = (data1,data2)=>{
        return new Promise ((resolve,reject)=>{
            this.post(`/searchData?key=${data1}&Category=${data2}`,).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
    
    
    searchJobs = (data1,data2)=>{
        return new Promise ((resolve,reject)=>{
            this.post(`/searchJobs?key=${data1}&Category=${data2}`,).then((res)=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        })
    }

 addReview = (id,review)=>{
        return new Promise ((resolve,reject)=>{
            this.post(`/AddReview/${id}`,review).then((res)=>{
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