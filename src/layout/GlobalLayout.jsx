import { NavbarWithCart } from '../components';
export const GlobalLayout = ({ children }) => {
  return (
    <>
      <NavbarWithCart />
      <main>{children}</main>
    </>
  );
};
