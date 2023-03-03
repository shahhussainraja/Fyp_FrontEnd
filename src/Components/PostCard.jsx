import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <Card style={{ width: '18rem', marginLeft:"20%"}}>
    <Card.Body>
      <Card.Title style={{color:'#00b7ff'}}>Furniture customize</Card.Title>
      <Card.Text>
        I want a customized furniture with gold combination.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Due date: 02-02-2023</ListGroup.Item>
      <ListGroup.Item>category: Furniture</ListGroup.Item>
      <ListGroup.Item>Budget: 1,00000</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <a className='nav-btn'  style={{width:'100%'}} >open</a>
    <a className='nav-btn' style={{width:'100%'}}>Make Offer</a>
    </Card.Body>
  </Card>
  );
}

export default GroupExample;