import Col from 'react-bootstrap/Col';
import { ListItemCard } from './ListItemCard';

const breakPointConstants = {
  XXL: 'xxl',
  XS: 'xs',
  DEFAULT: 'default'
};
const breakPointConfig = {
  [breakPointConstants.XXL]: (phone) => (
    <Col
      data-testid='col'
      className='justify-content-center'
      key={phone.id}
      lg={3}>
      <ListItemCard
        data-testid='list-item-card'
        id={phone.id}
        imageUrl={phone.imgUrl}
        brand={phone.brand}
        model={phone.model}
        price={phone.price}
      />
    </Col>
  ),
  [breakPointConstants.XS]: (phone) => (
    <Col
      data-testid='col'
      className='justify-content-center'
      key={phone.id}
      xs={12}>
      <ListItemCard
        id={phone.id}
        imageUrl={phone.imgUrl}
        brand={phone.brand}
        model={phone.model}
        price={phone.price}
      />
    </Col>
  ),
  [breakPointConstants.DEFAULT]: (phone) => (
    <Col
      key={phone.id}
      className='justify-content-center'>
      <ListItemCard
        id={phone.id}
        imageUrl={phone.imgUrl}
        brand={phone.brand}
        model={phone.model}
        price={phone.price}
      />
    </Col>
  )
};
export const Column = ({ breakPoint, phone }) => {
  const config = breakPointConfig[breakPoint] || breakPointConfig[breakPointConstants.DEFAULT];
  return config(phone);
};
