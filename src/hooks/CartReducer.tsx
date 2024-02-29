import { Products, TypeState } from '@/types/cartReducer';

type Actions =
  | { type: 'add'; payload: Products }
  | { type: 'delete'; payload: { id: number } }
  | { type: 'quantity'; payload: { id: number } }
  | { type: 'deleteQuantity'; payload: { id: number } };

export const cartReducer = (cartState: TypeState, action: Actions) => {
  switch (action.type) {
    case 'add': {
      const product = action.payload;
      const isProduct = cartState.cart.find(
        (products) => products.id === product.id
      );

      return isProduct
        ? {
            ...cartState,
            cart: cartState.cart.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    mount: parseFloat((item.mount + item.price).toFixed(2)),
                  }
                : item
            ),
          }
        : {
            ...cartState,
            cart: [...cartState.cart, product],
            count: cartState.count + 1,
          };
    }

    case 'delete':
      return {
        ...cartState,
        cart: cartState.cart.filter((item) => item.id !== action.payload.id),
        count: cartState.count - 1,
      };

    case 'quantity':
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                mount: parseFloat((item.mount + item.price).toFixed(2)),
              }
            : item
        ),
      };

    case 'deleteQuantity':
      return {
        ...cartState,
        cart: cartState.cart.map((item) => {
          const product = item.id === action.payload.id;
          if (product) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
                mount: parseFloat((item.mount - item.price).toFixed(2)),
              };
            }
          }
          return { ...item };
        }),
      };

    default:
      return cartState;
  }
};
