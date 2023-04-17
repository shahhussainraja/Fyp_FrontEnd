import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaPen, FaTrash, FaView} from 'react-icons/fa';

const Orders = () => {
  return (
    <div className='container'>
    <div style={{padding:"40px"}}>
      <h1>Orders</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
           <a><FaPen></FaPen></a>
           <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"><FaTrash></FaTrash></i></a>
           <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
           </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
           <a><FaPen></FaPen></a>
           <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"><FaTrash></FaTrash></i></a>
           <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
           </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>
           <a><FaPen></FaPen></a>
           <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"><FaTrash></FaTrash></i></a>
           <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
           </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Orders
