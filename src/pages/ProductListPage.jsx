import { useState } from 'react';
import { Loading, List, SearchBar } from '../components';
import { useWindowResize } from '../hooks';
import Container from 'react-bootstrap/Container';
import { useGetProductsQuery } from '../store/api/productsApi';
import { useNavigate } from 'react-router-dom';

export const ProductListPage = () => {
  const { breakPoint } = useWindowResize();
  const { data: products, isLoading, isError, isSuccess } = useGetProductsQuery();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        navigate('/error')
      ) : isSuccess ? (
        <Container>
          <SearchBar
            products={products}
            setFilteredData={setFilteredData}
          />
          {filteredData !== [] && filteredData.length === 0 ? (
            <h1>No results...</h1>
          ) : (
            <List
              phonesData={filteredData}
              breakPoint={breakPoint}
            />
          )}
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};
