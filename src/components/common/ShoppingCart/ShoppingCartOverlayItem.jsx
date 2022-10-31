import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useGetProductsQuery } from '../../../store/api/productsApi';

export const ShoppingCartOverlayItem = ({ productId, variant, handleDeleteProduct }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const { data: products } = useGetProductsQuery();

  useEffect(() => {
    const currentProduct = products?.find((product) => product.id === productId);
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
          height: 'auto',
          width: '15rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.3rem',
          borderRadius: '0.5rem',
          backgroundColor: 'white',
          marginBottom: '0.5rem'
        }}>
        <img
          style={{ height: '2.5rem', width: 'auto', borderRadius: '0.1rem' }}
          src={currentProduct?.imgUrl}
          alt={currentProduct?.model}
        />
        <span
          style={{
            width: '15rem',
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
          <Button
            className='btn-add-one'
            onClick={() => setCurrentQuantity(currentQuantity + 1)}>
            +
          </Button>{' '}
          <Button
            className='btn-substract-one'
            onClick={() => setCurrentQuantity(currentQuantity - 1)}>
            -
          </Button>
        </span>
        <Button
          className='btn-remove-from-cart'
          onClick={() => handleDeleteProduct(productId, variant)}
          variant='danger'>
          X
        </Button>
      </div>
    </div>
  );
};
