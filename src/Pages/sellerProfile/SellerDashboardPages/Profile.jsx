import React, { useEffect, useState} from "react";
import '../SellerDashboard.css';
import Select from "react-select";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSelector } from "react-redux";
import sellerServices from "../../../Services/SellerServices";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  accountName: "",
  phoneNumber: "",
  cnic: "",
  address: "",
  category:"",
  bio:""
};



const Customers = () => {

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState ('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [category, setCategory] = useState('');
  const [bio, setBio] = useState(' bio includes professional experiences and accomplishments gained over the course of their career.');
  const user = useSelector((state)=>state.userDetail)

  const [data,setData] = useState([])


const getProfileData = ()=>{
  sellerServices.getSellerProfile(user.id).then((res)=>{
    setData(res)
    setUsername(res.name);
    setShopName(res.shopName);
    setEmail(res.email);
    setPhoneNumber(res.phone || "N/A") ;
    setCNIC(res.CNIC || "N/A");
    setCategory(JSON.stringify(res.category) || "N/A")
    console.log(res)
  }).catch((e)=>console.log(e.message))
}

useEffect(getProfileData,[]);
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleShopNameChange = (event) => {
    setShopName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCNICChange = (event) => {
    setCNIC(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleEditProfile = () => {
    setEditing(!editing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };



  // React state to manage selected options
const [selectedOptions, setSelectedOptions] = useState(null);


// Array of all options
const optionList = [
  { value: "baking", label: "Baking" },
  { value: "catering", label: "Catering" },
  { value: "clothing", label: "Clothing" },
  { value: "decoration", label: "Decoration" },
  { value: "furnitture", label: "Furniture" },
  { value: "interior_design", label: "Interion Design" },
  
];

// Function triggered on selection
function handleSelect(data) {
  setSelectedOptions(data);
  
}


  return (
    <div className="container">

      <div className="UserProfile">
              <div classname='' style={{display:"flex", borderBottom:"solid black 1px", padding: "10px"}}>
                <div>
                  <img src={`http://localhost:8080${data?.image}`}  
                    className="rounded-circle mb-3"
                    style={{height:"150px", width:"150px", objectFit:"cover"}}
                  />
                  </div>
                  <div className="profileName">
                  <h3 className="pnh3">{data?.name}</h3>
                  <p>Welcome {data?.name} you can edit your profile</p>
                  </div>
              </div>
              <div className="profileFlex">
                <div>
                <p className="p"><b>Shop Name</b></p>
                <p className="p"><b>Email</b></p>
                <p className="p"><b>Phone Number</b></p>
                <p className="p"><b>CNIC Number</b></p>
                <p className="p"><b>Specialities</b></p>   
                <p className="p"><b>About Me</b></p>  
              </div>
              <div className="pdata">
                  <p className="p">{shopName}</p>
                  <p className="p">{email}</p>
                  <p className="p">{phoneNumber}</p>
                  <p className="p">{CNIC}</p>
                  <p className="p">{category}</p>
                  <p className="p">{bio}</p>
                </div>
              </div>
                {editing ? (
                  <Form onSubmit={handleSubmit} className=''>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        value={data?.name}
                        onChange={handleUsernameChange}
                      />
                    </FormGroup>
                    <FormGroup> 
                      <Label for="shopName">Shop Name</Label>
                      <Input
                        type="text"
                        name="shopName"
                        id="shopName"
                        value={shopName}
                        onChange={handleShopNameChange}
                      />
                    </FormGroup>
                 
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phoneNumber">Phone Number</Label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="CNIC">CNIC</Label>
                      <Input
                        type="text"
                        name="CNIC"
                        id="CNIC"
                        value={CNIC}
                        onChange={handleCNICChange}
                      />
                    </FormGroup>
                    {/* <FormGroup>
                      <Label for="category">Specialities</Label>
                      <Input
                        type="text"
                        name="category"
                        id="category"
                        value={category}
                        onChange={handleUsernameChange}
                      />
                    </FormGroup> */}
                    <FormGroup>
                      <Label for="category">Specialities
                      <Select
                                          name='category'
                                          id="category"
                                          options={optionList}
                                          placeholder="Choose category"
                                          value={selectedOptions}
                                          onChange={handleSelect}
                                          isSearchable={true}
                                          required="true"
                                          isMulti
                                        />
                    </Label>
                     
                    </FormGroup>
                    <FormGroup>
                      <Label for="bio">Bio</Label>
                      <Input
                        type="text"
                        name="bio"
                        id="bio"
                        value={bio}
                        onChange={handleBioChange}
                      />
                      </FormGroup>
                    <button className="profileEdit-btn">
                      Save
                    </button>
                    <button color="secondary" className="cancle" onClick={handleEditProfile}>
                      Cancel
                    </button>
                  </Form>
                ) : (
                  <div className='text-center'>
                  <p>Edit your Profile here</p>
                  <button className='profileEdit-btn' onClick={handleEditProfile}>
                    Edit Profile
                  </button>
                  </div>
                  
                  
                )}
                
              </div>
            </div>
            
          
          
  )
};

export default Customers;
