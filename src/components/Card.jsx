import { Card, Col, Row } from 'react-bootstrap'
import items from '../items.json'

function CardContainer() {
  <Row className="g-2">
  {items.map((book) => {
    return (
      <Col xs={12} md={4} key={book.asin}>
        <Card className="book-cover d-flex flex-column">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  })}
  </Row>
}

export default CardContainer;