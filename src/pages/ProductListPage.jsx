import { useState } from 'react';
import { Loading, List, Error, SearchBar } from '../components';
import { useWindowResize } from '../hooks';
import Container from 'react-bootstrap/Container';
import { useGetProductsQuery } from '../store/api/productsApi';

export const ProductListPage = () => {
  const { breakPoint } = useWindowResize();
  const { data: products, isLoading, isError, isSuccess } = useGetProductsQuery();
  const [filteredData, setFilteredData] = useState([]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
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
