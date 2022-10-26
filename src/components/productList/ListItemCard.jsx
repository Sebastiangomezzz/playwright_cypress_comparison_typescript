import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const ListItemCard = ({ id, imageUrl, brand, model, price }) => {
  return (
    <Card
      data-testid='list-item-card'
      style={{
        width: '12rem',
        height: 'auto',
        padding: '0.5rem',
        margin: '0.5rem'
      }}>
      <Link to={`${id}`}>
        <Card.Img
          src={imageUrl}
          alt={model}
        />
        <Card.Body>
          <Card.Subtitle>{brand}</Card.Subtitle>
          <Card.Title className='text-truncate'>{model}</Card.Title>
          {price ? <Card.Text>{price} €</Card.Text> : <Card.Text>Price on request</Card.Text>}
        </Card.Body>
      </Link>
    </Card>
  );
};
