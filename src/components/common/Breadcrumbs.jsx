import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

export const Breadcrumbs = ({ location }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        data-testid='breadcrumb'
        linkAs={Link}
        linkProps={{ to: '/' }}>
        Home
      </Breadcrumb.Item>
      {location.pathname.includes('/products/') && (
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};
