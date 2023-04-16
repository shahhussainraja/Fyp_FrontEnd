import React, {useState} from 'react'
import { FaEdit} from 'react-icons/fa';
import './SellerProfile.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  accountName: "",
  phoneNumber: "",
  cnic: "",
  address: "",
};

function Profile() {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('Shah Hussain');
  const [shopName, setShopName] = useState('Shah_Foods');
  const [email, setEmail] = useState ('shahhussain@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [CNIC, setCNIC] = useState('12321-2242456-7');
  const [category, setCategory] = useState('Food');
  

 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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

      <div className="UserProfile mt-5">
            <div className="row">
              <div className="col-md-3 offset-md-3">
                <div className="text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="profile pic"
                    className="rounded-circle mb-3"
                  />
                  <h1>{username}</h1>
                  <p>{shopName}</p>
                  <p>{email}</p>
                  <p>{phoneNumber}</p>
                  <p>{CNIC}</p>
                  <p>{category}</p>
                </div>
                {editing ? (
                  <Form onSubmit={handleSubmit} className='text-center'>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
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
                        onChange={handleUsernameChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleUsernameChange}
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
                        onChange={handleUsernameChange}
                      />
                    </FormGroup>
                    {/* <FormGroup>
                      <Label for="username">Username
                      <Form.Select
                                          name='category'
                                          class="form-control  border-0 shadow-sm px-4"
                                          options={optionList}
                                          placeholder="Choose category"
                                          value={selectedOptions}
                                          onChange={handleSelect}
                                          isSearchable={true}
                                          required="true"
                                          isMulti
                                        />
                    </Label>
                     
                    </FormGroup> */}
                    <Button type="submit" color="primary" className="mr-2">
                      Save
                    </Button>
                    <Button color="secondary" onClick={handleEditProfile}>
                      Cancel
                    </Button>
                  </Form>
                ) : (
                  <div className='text-center'>
                    <p>Bespoke your Profile too</p>
                  <Button className='edit-btn' onClick={handleEditProfile}>
                    Edit Profile
                  </Button>
                  </div>
                )}
              </div>
            </div>
            <div className='col-md-3 offset-md-3'>
              <h1>heiuy</h1>
            </div>
          </div>
          </div>
  )
}

export default Profile