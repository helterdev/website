type Data = Products[];

export type Products = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  mount: number;
};
export type TypeState = {
  cart: Data;
  total: number;
  count: number;
};
