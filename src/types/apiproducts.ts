import { Products, TypeState } from './cartReducer';

export type Data = Catalogo[];

export type State = {
  state: Data | null;
  cartState: TypeState;
  setData: (data: Data) => void;
  add: (payload: Products) => void;
  deletetoCart: (id: number) => void;
  updateQuantity: (id: number) => void;
  deleteQuantity: (id: number) => void;
};
export interface Catalogo {
  id: number;
  title: string;
  image: string;
  price: number;
}
