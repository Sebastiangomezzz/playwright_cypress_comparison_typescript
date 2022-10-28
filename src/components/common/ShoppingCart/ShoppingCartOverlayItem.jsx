import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useGetProductsQuery } from '../../../store/api/productsApi';

export const ShoppingCartOverlayItem = ({ productId, variant, handleDeleteProduct }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const { data: products } = useGetProductsQuery();

  useEffect(() => {
    const currentProduct = products?.find((p) => p.id === productId);
    setCurrentProduct({ ...currentProduct, ...variant });
    setCurrentQuantity(variant.quantity);
  }, [products, productId, variant]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        border: '1px solid white',
        borderRadius: '0.5rem'
      }}>
      <span
        style={{
          height: '3.5rem',
          width: '15rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          backgroundColor: 'white',
          marginBottom: '0.5rem'
        }}>
        <img
          style={{ height: '2rem', width: 'auto' }}
          src={currentProduct?.imgUrl}
          alt={currentProduct?.model}
        />
        <span
          style={{
            width: '10rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <p>
            {currentProduct?.model} {currentProduct?.colorCode} {currentProduct?.storageCode}{' '}
            Quantity:
            {currentQuantity}
          </p>
          <p>{currentProduct?.price}€</p>
        </span>
      </span>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
        <span style={{ marginRight: '2rem' }}>
          <Button onClick={() => setCurrentQuantity(currentQuantity + 1)}>+</Button>{' '}
          <Button onClick={() => setCurrentQuantity(currentQuantity - 1)}>-</Button>
        </span>
        <Button
          onClick={() => handleDeleteProduct(productId, variant)}
          variant='danger'>
          X
        </Button>
      </div>
    </div>
  );
};
