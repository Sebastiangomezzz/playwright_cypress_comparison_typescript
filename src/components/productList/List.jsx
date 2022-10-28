import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Column } from './Column';

export const List = ({ phonesData, breakPoint }) => {
  return (
    <Container className='d-flex justify-content'>
      <Row className='phones-list'>
        {phonesData.map((phone) => {
          return (
            <Column
              key={phone.id}
              phone={phone}
              breakPoint={breakPoint}
            />
          );
        })}
      </Row>
    </Container>
  );
};
