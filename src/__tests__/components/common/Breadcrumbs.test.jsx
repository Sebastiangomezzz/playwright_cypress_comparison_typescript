import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Breadcrumbs } from '../../../components';

describe('Breadcrumbs tests', () => {
  test('Should render a Breadcrumb component', () => {
    const location = {
      pathname: '/products/123'
    };
    render(<Breadcrumbs location={location} />, { wrapper: MemoryRouter });
  });
  test('Should render a Breadcrumb component with the correct items', () => {
    const location = {
      pathname: '/products/123'
    };
    render(<Breadcrumbs location={location} />, { wrapper: MemoryRouter });
    const breadcrumb = screen.getByTestId('breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveClass('breadcrumb-item');

    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
    expect(home).toHaveAttribute('href', '/');

    const details = screen.getByText('Details');
    expect(details).toBeInTheDocument();
    expect(details).toHaveClass('breadcrumb-item active');
  });
});
