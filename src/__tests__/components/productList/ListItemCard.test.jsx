import { render, screen } from '@testing-library/react';
import { ListItemCard } from '../../../components';
import { MemoryRouter } from 'react-router-dom';

describe('ListItemCard tests', () => {
  const id = 'dblsdkfsfdf';
  const imageUrl = 'http://kjhkjhkj.com';
  const brand = 'Brand';
  const model = 'Model';
  const price = '121';
  beforeAll(() => {
    render(
      <ListItemCard
        id={id}
        imageUrl={imageUrl}
        brand={brand}
        model={model}
        price={price}
      />,
      { wrapper: MemoryRouter }
    );
  });
  test('Should render the image with the supplied imgUrl and alt values', () => {
    const { alt, src } = screen.getByRole('img');
    expect(alt).toBe(model);
    expect(src).toBe(imageUrl + '/');
  });

  test('Should render a text if there is no price for the product', () => {
    render(
      <ListItemCard
        id={id}
        imageUrl={imageUrl}
        brand={brand}
        model={model}
        price={null}
      />,
      { wrapper: MemoryRouter }
    );
    const priceElement = screen.getByText(`Price on request`);
    expect(priceElement).toBeInTheDocument();
  });

  test('Should have a link with an href including the id of the product', () => {
    render(
      <ListItemCard
        id={id}
        imageUrl={imageUrl}
        brand={brand}
        model={model}
        price={price}
      />,
      { wrapper: MemoryRouter }
    );
    const { href } = screen.getByRole('link');
    expect(href).toBe(`http://localhost/${id}`);
  });
  test('Should render the brand of the product', () => {
    render(
      <ListItemCard
        id={id}
        imageUrl={imageUrl}
        brand={brand}
        model={model}
        price={price}
      />,
      { wrapper: MemoryRouter }
    );
    const brandElement = screen.getByText(brand);
    expect(brandElement).toBeInTheDocument();
  });
});
