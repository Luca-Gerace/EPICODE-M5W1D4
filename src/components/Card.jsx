import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard(prop) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>{prop.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;