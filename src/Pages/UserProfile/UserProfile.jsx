import React from 'react';
import { FaEdit} from 'react-icons/fa';


export default function UserProfile() {
  return (
    <div className="container">
    
      <div className="py-5 h-100">
        <div className="justify-content-center align-items-center h-100"  style={{marginTop:"1rem",borderRadius:"5px" ,padding:"25px", backgroundColor:"ghostwhite" }}>
          <div lg="6" className="mb-4 mb-lg-0">
            
            <div className="mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="g-0">
              
                <div md="4" className="gradient-custom text-center text-black"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' , marginTop:"50px" }}>
                    <h4 style={{color:"#2693b2", fontWeight:"bold"}}>Personal Profile</h4>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <h5 style={{color:"#E3BE00"}}>Amber Ch.</h5>
                  <p style={{color:"#2693b2"}}>Verified user</p>
                  <div style={{display:"flex", padding:"10px", justifyContent:"center"}}>
                  <p style={{color:"#2693b2"}}>Edit your profile by click on this icon</p>
                  <FaEdit style={{color:"#2693b2", margin:"3px", marginLeft:"10px"}} far icon="edit mb-5" />
                  </div>
                </div>
                <div md="8">
                  <div className="p-4">
                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}>Information</h5>
                    <hr className="mt-0 mb-4" />
                    <div className="pt-1">
                    
                    <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Username</p>
                        <p className="text-muted">Amber Ch.</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Email</p>
                        <p className="text-muted">info@example.com</p>
                      </div>
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Phone</p>
                        <p className="text-muted">123 456 789</p>
                      </div>
                      
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>City</p>
                        <p className="text-muted">Lahore</p>
                      </div>
                     
                      <div size="6" className="mb-3">
                        <p style={{color:"#E3BE00"}}>Phone</p>
                        <p className="text-muted">123 456 789</p>
                      </div>
                    </div>

                    <h5 style={{fontWeight:"bold", color:"#2693b2"}}>History</h5>
                    <hr className="mt-0 mb-4" />
                    <div className="pt-1">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}