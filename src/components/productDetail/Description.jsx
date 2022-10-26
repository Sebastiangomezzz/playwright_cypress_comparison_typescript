import { Card, ListGroup } from 'react-bootstrap';

export const Description = ({ product }) => {
  const {
    model,
    brand,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight
  } = product;
  return (
    <Card className='mb-4'>
      <Card.Header>{model}</Card.Header>
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>CPU: {cpu}</ListGroup.Item>
          <ListGroup.Item>{ram}</ListGroup.Item>
          <ListGroup.Item>OS: {os}</ListGroup.Item>
          <ListGroup.Item>Resolution: {displayResolution}</ListGroup.Item>
          <ListGroup.Item>Battery: {battery}</ListGroup.Item>
          <ListGroup.Item>Primary camera: {primaryCamera}</ListGroup.Item>
          <ListGroup.Item>Secondary camera: {secondaryCmera}</ListGroup.Item>
          <ListGroup.Item>Dimentions: {dimentions}</ListGroup.Item>
          <ListGroup.Item>Weight: {weight}</ListGroup.Item>
          <ListGroup.Item>Price: {price}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
