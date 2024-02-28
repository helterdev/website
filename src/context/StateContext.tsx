'use client';

import { Catalogo } from '@/types/apiproducts';
import React, { createContext, useContext, useState } from 'react';

type StateData = Catalogo[];

type Provider = {
  state?: StateData[] | null;
  quantity?: number;
  mount?: number;
  total?: number;
};

type Props = {
  children: React.ReactNode;
};

const StateContext = createContext<Provider>({} as Provider);

export const StateProvider = ({ children }: Props) => {
  const [data, setData] = useState<StateData | null>(null);

  //SetStates
  const setDataState = (data: StateData) => {
    setData(data);
  };
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

const useStateData = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateData must be used within a StateProvider');
  }

  return context;
};
