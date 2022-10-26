import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { List } from '../../../components';

describe('Column tests', () => {
  test('Should render a list of columns', () => {
    const phonesData = [
      
      {
        id: 'dblsdkfsdfgsdfgfdf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
      },
      {
        id: 'dblsdkfdfgddddsfdf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
      },
      {
        id: 'dblsdkfsfaaaaadf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
      },
      {
        id: 'dblsdkfsbbbbbbfdf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
      },
      {
        id: 'dblsdkfshhhhhfdf',
        imgUrl: 'http://kjhkjhkj.com',
        brand: 'Brand',
        model: 'Model',
        price: '121'
      }
    ];
    const breakPoint = 'xxl';
    render(
      <List
        phonesData={phonesData}
        breakPoint={breakPoint}
      />,
      { wrapper: MemoryRouter }
    );
    const col = screen.getAllByTestId('col');
    expect(col).toHaveLength(phonesData.length);
  });
});
