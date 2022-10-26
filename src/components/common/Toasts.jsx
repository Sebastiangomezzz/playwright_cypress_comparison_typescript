import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const Toasts = ({ showToast, toggleShowToast }) => {
  return (
    <ToastContainer className='position-fixed top-0 end-0 p-5'>
      <Toast
        show={showToast}
        onClose={toggleShowToast}
        delay={1500}
        autohide>
        <Toast.Body>Product successfully added!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
