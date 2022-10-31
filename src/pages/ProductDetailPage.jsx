import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Loading, Error, Description, Actions, Toasts } from '../components';
import { useGetProductQuery } from '../store/api/productsApi';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError, isSuccess } = useGetProductQuery(productId);
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => {
    setShowToast(() => !showToast);
  };
  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : isSuccess ? (
        <Container>
          <Container className='d-flex justify-content-end pe-4'>
            <Button
              variant='secondary'
              onClick={() => back()}
              className='back-to-list-btn'>
              Back to List of devices
            </Button>
          </Container>
          <Container className='d-flex'>
            <Container
              fluid
              className='mt-4'>
              <Image
                imageUrl={product.imgUrl}
                model={product.model}
              />
            </Container>
            <Container className='mt-4'>
              <Description product={product} />
              <Actions
                toggleShowToast={toggleShowToast}
                id={product.id}
                colors={product.colors}
                memoryOptions={product.internalMemory}
              />
              <Toasts
                showToast={showToast}
                toggleShowToast={toggleShowToast}
              />
            </Container>
          </Container>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
