import { useState, useEffect } from 'react';
import { useAddProductMutation } from '../store/api/productsApi';
import { useDispatch } from 'react-redux';
import { increment } from '../store/Slices/cartSlice';

export const useAddToCart = ({ id, colors, memoryOptions }) => {
  const dispatch = useDispatch();
  const [addProduct, result] = useAddProductMutation();
  const [formState, setFormState] = useState({
    id,
    colorCode: colors[0],
    storageCode: memoryOptions[0]
  });
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formState);
  };
  useEffect(() => {
    if (result.isSuccess) {
      dispatch(increment());
    } else return;
  }, [result, dispatch]);

  return { handleChange, handleSubmit };
};
