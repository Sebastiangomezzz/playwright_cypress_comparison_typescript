import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
  return (
    <Spinner
      className='position-fixed top-50 end-50'
      animation='border'
      variant='success'
    />
  );
};
