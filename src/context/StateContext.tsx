'use client';

import { cartReducer } from '@/hooks/CartReducer';
import { Data, State } from '@/types/apiproducts';
import { Products, TypeState } from '@/types/cartReducer';
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from 'react';

type Props = {
  children: React.ReactNode;
};

const CartState: TypeState = {
  cart: [],
  total: 0,
  count: 0,
};

const StateContext = createContext<State>({} as State);

export const StateProvider = ({ children }: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [cartState, dispatch] = useReducer(cartReducer, CartState);

  //SetStates
  const setDataState = useCallback((data: Data) => {
    setData(data);
  }, []);

  //dispatches
  const add = (payload: Products) => {
    dispatch({ type: 'add', payload });
  };

  const deletetoCart = (id: number) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  const updateQuantity = (id: number) => {
    dispatch({ type: 'quantity', payload: { id } });
  };

  const deleteQuantity = (id: number) => {
    dispatch({ type: 'deleteQuantity', payload: { id } });
  };

  return (
    <StateContext.Provider
      value={{
        state: data,
        cartState,
        setData: setDataState,
        add,
        deletetoCart,
        updateQuantity,
        deleteQuantity,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateData = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateData must be used within a StateProvider');
  }

  return context;
};
