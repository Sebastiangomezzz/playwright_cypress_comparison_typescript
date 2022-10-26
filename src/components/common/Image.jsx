export const Image = ({ imageUrl, model }) => {
  return (
    <img
      style={{ width: '18rem', height: 'auto', borderRadius: '0.5rem' }}
      src={imageUrl}
      alt={model}
    />
  );
};
