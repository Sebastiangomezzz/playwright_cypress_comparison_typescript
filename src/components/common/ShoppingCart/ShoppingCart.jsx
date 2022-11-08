import { useRef, useState } from 'react';
import cartIcon from '../../../assets/icons/shopping-cart-of-checkered-design.png';
import Badge from 'react-bootstrap/Badge';
import Overlay from 'react-bootstrap/Overlay';
import { useSelector } from 'react-redux';
import Popover from 'react-bootstrap/Popover';
import { Button, Container } from 'react-bootstrap';
import { ShoppingCartOverlayItem } from './ShoppingCartOverlayItem';
import { useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../../../store/Slices/cartSlice';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {
  const itemsInCart = useSelector((storeState) => storeState.cart.value);
  const productsInCart = useSelector((storeState) => storeState.cart.productsInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleDeleteProduct = (productId, variant) => {
    dispatch(deleteProductFromCart({ productId, variant }));
  };

  return (
    <div ref={ref}>
      <Container
        className='d-flex align-items-end flex-column '
        onClick={handleClick}
        cy-data='cart-btn'>
        <Badge
          pill
          bg='secondary'
          className='me-4'>
          {itemsInCart > 0 && itemsInCart}
        </Badge>
        <img
          alt='cart-icon'
          src={cartIcon}
          className='grayscale'
          style={{
            width: '3rem',
            height: 'auto',
            borderRadius: '0.5rem'
          }}
        />
      </Container>

      <Overlay
        placement={'bottom-end'}
        target={target}
        container={ref}
        show={show}>
        <Popover
          id='popover-contained'
          style={{ padding: 0, backgroundColor: 'rgba(185, 182, 182, 0.5)' }}>
          <Popover.Header as='h3'>Cart</Popover.Header>
          <Popover.Body data-cy='cart-list'>
            {productsInCart && productsInCart.length > 0 ? (
              productsInCart.map((product) => (
                <ShoppingCartOverlayItem
                  key={product.id + Math.random()}
                  productId={product.id}
                  variant={{ ...product }}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))
            ) : (
              <div>Cart is empty...</div>
            )}
            {productsInCart && productsInCart.length > 0 && (
              <Button onClick={() => navigate('/checkout')}>Proceed to checkout</Button>
            )}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};
