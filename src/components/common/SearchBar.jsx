import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const SearchBar = ({ products, setFilteredData }) => {
  const [valueToSearch, setValueToSearch] = useState();

  useEffect(() => {
    setFilteredData(products);
  }, []);

  const handleChange = ({ target }) => {
    if (target.value.length <= 2) {
      return setFilteredData(products);
    } else setValueToSearch(target.value);
  };
  useEffect(() => {
    if (valueToSearch && valueToSearch !== '') {
      const filteredResults = products.filter(
        (product) =>
          product.model.toLowerCase().includes(valueToSearch.toLowerCase().trim()) ||
          product.brand.toLowerCase().includes(valueToSearch.toLowerCase().trim())
      );
      setFilteredData(filteredResults);
    }
  }, [valueToSearch]);
  return (
    <Container className='d-flex flex-row-reverse'>
      <Card style={{ width: '15rem', marginRight: '0.6rem', marginBottom: '1.2rem' }}>
        <Form>
          <Form.Control
            onChange={handleChange}
            type='text'
            placeholder='Type 3 or more characters...'
          />
        </Form>
      </Card>
    </Container>
  );
};
