import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const initialDataState = { productName: "", productImage: "", productDetails: "", productAmount: "", productStatus: "" };

const ProductList = () => {
  const [data, setData] = useState([
    { productName: "Bridal Lehanga", productImage: "", productDetails: "Bridal Lehnga with canon 3 piece", productAmount: "5000", productStatus: "In Stock" },
   
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newData, setNewData] = useState(initialDataState);
  const [editIndex, setEditIndex] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleEditData = index => {
    setNewData(data[index]);
    setEditIndex(index);
    toggleModal();
  };

  const handleDeleteData = index => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const handleSaveData = () => {
    const newDataObj = { ...newData };
    if (editIndex !== null) {
      setData(prevData => {
        const newData = [...prevData];
        newData[editIndex] = newDataObj;
        return newData;
      });
    } else {
      setData(prevData => [...prevData, newDataObj]);
    }
    toggleModal();
    setNewData(initialDataState);
    setEditIndex(null);
  };


    //image handler
    const [image, setImage] = useState('')
    function handleImage(e) {
      setImage(e.target.files[0])
    }
  
  // const handleAdd = () => {
  //   setData([...data, newData]);
  //   setModalOpen(false);
  // };

  // const handleEdit = () => {
  //   const newDataArray = [...data];
  //   newDataArray[editIndex] = newData;
  //   setData(newDataArray);
  //   setModalOpen(false);
  // };

  return (
    <div className="container">
      <h1 style={{marginTop:"80px"}}>Bootstrap Table Example</h1>
      <Button color="primary" onClick={toggleModal}>Add Row</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Details</th>
            <th>Amount</th>
            <th>Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.productName}</td>
              <td>{row.productDetails}</td>
              <td>{row.productAmount}</td>
              <td>{row.productImage}</td>
              <td>{row.productStatus}</td>
              <td>
                <Button color="primary" onClick={() => handleEditData(index)}>Edit</Button>
                {" "}
                <Button color="danger" onClick={() => handleDeleteData(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
  <ModalHeader toggle={toggleModal}>{editIndex !== null ? "Edit Data" : "Add Data"}</ModalHeader>
  <ModalBody>
    <div className="form-group">
      <label>Name:</label>
      <input type="text" name="productName" value={newData.productName} onChange={handleInputChange} className="form-control" />
    </div>
    
    <div className="form-group">
      <label>details:</label>
      <input type="text" name="productDetails" value={newData.productDetails} onChange={handleInputChange} className="form-control" />
    </div>
    <div className="form-group">
      <label>amount:</label>
      <input type="number" name="productAmount" value={newData.productAmount} onChange={handleInputChange} className="form-control" />
    </div>
    <div className="form-group">
      <label>status:</label>
      <input type="text" name="productStatus" value={newData.productStatus} onChange={handleInputChange} className="form-control" />
    </div>
    <div className="form-group">
      <label>Image:
      {image && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(image)}
                    />
                    <br />
                    <button onClick={() => setImage(null)}>Remove</button>
                    </div>
                )}
                    <br />
                     <br />
                                      
                   <input
                      type="file"
                      name="image"
                      required
                      onChange={(event) => {
                     console.log(event.target.files[0]);
                      setImage(event.target.files[0]);
                 }}
              />
      </label>
     
    </div>
  </ModalBody>
  <ModalFooter>
    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
    <Button color="primary" onClick={editIndex !== null ? handleSaveData : handleSaveData}>Save</Button>
  </ModalFooter>
</Modal>

</div>
  )
}

export default ProductList;