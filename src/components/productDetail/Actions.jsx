import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAddToCart } from '../../hooks/useAddToCart';

export const Actions = ({ toggleShowToast, id, colors, memoryOptions }) => {
  const { handleChange, handleSubmit } = useAddToCart({ id, colors, memoryOptions });
  return (
    <Card>
      <Form
        className='p-2'
        onSubmit={handleSubmit}>
        <Form.Label>Color</Form.Label>
        <Form.Select
          className='mb-2'
          name='colorCode'
          onChange={handleChange}
          disabled={colors.length <= 1 ? true : false}>
          {colors.map((color) => {
            return (
              <option
                key={color}
                value={color}>
                {color}
              </option>
            );
          })}
        </Form.Select>
        <Form.Label>Memory size</Form.Label>
        <Form.Select
          className='mb-4'
          name='storageCode'
          onChange={handleChange}
          disabled={memoryOptions.length <= 1 ? true : false}>
          {memoryOptions.map((memoryOptions) => {
            return (
              <option
                key={memoryOptions}
                value={memoryOptions}
                defaultValue={memoryOptions}>
                {memoryOptions}
              </option>
            );
          })}
        </Form.Select>
        <Button
          type='submit'
          onClick={toggleShowToast}
          className='button-add-to-cart'>
          Add to cart
        </Button>
      </Form>
    </Card>
  );
};
