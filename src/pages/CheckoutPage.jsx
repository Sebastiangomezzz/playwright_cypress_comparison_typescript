import { useState } from 'react';
// import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CheckoutPage = () => {
  //   const productsInCart = useSelector((storeState) => storeState.cart.productsInCart);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log('submit');
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };
  if (success) return <h1 style={{ margin: '20% 30%' }}>Thank you for your purchase!</h1>;
  return (
    <Card style={{ maxWidth: '40rem', margin: '0 auto' }}>
      <Card.Header>Checkout</Card.Header>
      <Card.Body style={{ minHeight: '40rem' }}>
        {loading ? (
          <div style={{ margin: '40%' }}>Loading...</div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className='mb-3'
              controlId='firstName'
              data-cy='formFirstName'>
              <Form.Label>Fist Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter you first name'
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='lastName'
              data-cy='formLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your last name'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='email'
              data-cy='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='phone'
              data-cy='formPhone'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your phone number'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='adress'
              data-cy='formAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your address'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='zipCode'
              data-cy='formZipCode'>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your zip code'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='billingAdress'
              data-cy='formBillingAddress'>
              <Form.Label>Billing address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your billing address'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='cardNumber'
              data-cy='formCardNumber'>
              <Form.Label>Card number (IBAN)</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your card number'
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              data-cy='formSubmitButton'>
              Submit
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};
