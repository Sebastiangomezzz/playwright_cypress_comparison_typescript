import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, ShoppingCart } from '..';

export const NavbarWithCart = () => {
  const location = useLocation();
  return (
    <Navbar
      bg='dark'
      variant='dark'
      className='mb-4 px-4'>
      <Container className='d-flex align-items-start flex-column justify-content-start'>
        <Navbar.Brand cy-data='navbar'>
          <Link to='/'>
            <h1>OldMobiles.com</h1>
          </Link>
        </Navbar.Brand>
        <Breadcrumbs location={location} />
      </Container>
      {location.pathname !== '/checkout' ? <ShoppingCart /> : null}
    </Navbar>
  );
};
