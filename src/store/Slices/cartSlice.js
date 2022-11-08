import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  productsInCart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementProductQuantity: (state, payload) => {
      const { id, colorCode, storageCode } = payload.payload;
      const product = state.productsInCart.find(
        (product) =>
          product.id === id &&
          product.colorCode === colorCode &&
          product.storageCode === storageCode
      );
      if (product) {
        product.quantity += 1;
        state.value += 1;
      }
    },
    decrementProductQuantity: (state, payload) => {
      const { id, colorCode, storageCode, quantity } = payload.payload;
      if (quantity === 1) {
        state.value -= 1;
        state.productsInCart = state.productsInCart.filter(
          (product) =>
            product.id !== id ||
            product.colorCode !== colorCode ||
            product.storageCode !== storageCode
        );
      } else {
        const product = state.productsInCart.find(
          (product) =>
            product.id === id &&
            product.colorCode === colorCode &&
            product.storageCode === storageCode
        );
        if (product) {
          product.quantity -= 1;
          state.value -= 1;
        }
      }
    },
    addProductToCart: (state, payload) => {
      // if the product does not exist in the cart, add it
      if (
        state.productsInCart &&
        state.productsInCart.length >= 0 &&
        !state.productsInCart?.find((product) => product.id === payload.payload.id)
      ) {
        state.productsInCart?.push({ ...payload.payload, quantity: 1 });
      }
      // if the product exists find the one that has the same color and storage
      // and increment the quantity if the property exists, otherwise add it to the product
      else {
        state.productsInCart?.forEach((product) => {
          if (
            product.id === payload.payload.id &&
            product.colorCode === payload.payload.colorCode &&
            product.storageCode === payload.payload.storageCode
          ) {
            product.quantity += 1;
          }
        });
      }
      // if the product exists and the color or memory or both options are different, add a new product to the cart
      if (
        state.productsInCart &&
        state.productsInCart.length > 0 &&
        state.productsInCart.find((product) => product.id === payload.payload.id) &&
        !state.productsInCart.find(
          (product) =>
            product.id === payload.payload.id &&
            product.colorCode === payload.payload.colorCode &&
            product.storageCode === payload.payload.storageCode
        )
      ) {
        state.productsInCart.push({ ...payload.payload, quantity: 1 });
      }
    },
    deleteProductFromCart: (state, payload) => {
      //delete one product with the same color and memory and decrement the quantity by one
      console.log(payload.payload.variant);
      const productToDelete = payload.payload.variant;
      state.value = state.value - productToDelete.quantity;
      state.productsInCart.forEach((product) => {
        state.productsInCart = state.productsInCart.filter(
          (product) =>
            product.id !== productToDelete.id ||
            product.colorCode !== productToDelete.colorCode ||
            product.storageCode !== productToDelete.storageCode
        );
      });
    }
  }
});
export const {
  increment,
  incrementProductQuantity,
  decrementProductQuantity,
  addProductToCart,
  deleteProductFromCart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
