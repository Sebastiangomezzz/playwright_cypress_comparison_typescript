import { render, screen } from '@testing-library/react';
import { Column } from '../../../components';
import { MemoryRouter } from 'react-router-dom';

describe('Column tests', () => {
  const phone = {
    id: 'dblsdkfsfdf',
    imgUrl: 'http://kjhkjhkj.com',
    brand: 'Brand',
    model: 'Model',
    price: '121'
  };
  test('Should render a ListItemCard component', () => {
    const breakPoint = 'xxl';
    render(
      <Column
        phone={phone}
        breakPoint={breakPoint}
      />,
      { wrapper: MemoryRouter }
    );
  });
  test('Should render a Col component with the correct lg value', () => {
    const breakPoint = 'xxl';
    render(
      <Column
        phone={phone}
        breakPoint={breakPoint}
      />,
      { wrapper: MemoryRouter }
    );
    const col = screen.getByTestId('col');
    expect(col).toBeInTheDocument();
    expect(col).toHaveClass('justify-content-center col-lg-3');
  });
  test('Should render a Col component with the correct xs value', () => {
    const breakPoint = 'xs';
    render(
      <Column
        phone={phone}
        breakPoint={breakPoint}
      />,
      { wrapper: MemoryRouter }
    );
    const col = screen.getByTestId('col');
    expect(col).toBeInTheDocument();
    expect(col).toHaveClass('justify-content-center col-12');
  });
});
