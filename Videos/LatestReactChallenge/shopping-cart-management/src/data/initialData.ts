
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export type Cart = {
  productId: number;
  quantity: number;
}

type OldUserAuth = {
  id: number;
  name: string;
}
export type UserAuth = {
  name: string;
  isAuthenticate: boolean;
  error: null | string;
  userList: OldUserAuth[];
  userCart: Cart[];
}

export const initialUserAuth: UserAuth = {
  name: '',
  isAuthenticate: false,
  error: null,
  userList: [{id: 1, name: 'Pankaj'}, {id: 2, name: 'Charu'},  {id: 3, name: 'Rianna'}],
  userCart: []
}

export const initialProducts: Product[] = [
  { id: 1, name: 'Apple iPhone 13', price: 999, description: 'The latest iPhone with A15 Bionic chip, dual-camera system, and 5G support.', stock: 4 },
  { id: 2, name: 'Samsung Galaxy S21', price: 799, description: 'A flagship smartphone featuring a dynamic AMOLED display and powerful camera capabilities.', stock: 8 },
  { id: 3, name: 'Google Pixel 6', price: 699, description: 'A premium smartphone known for its exceptional camera quality and stock Android experience.', stock: 7 },
  { id: 4, name: 'Sony WH-1000XM4 Headphones', price: 349, description: 'Noise-cancelling over-ear headphones with exceptional sound quality and battery life.', stock: 3 },
  { id: 5, name: 'Apple MacBook Pro', price: 1299, description: 'A powerful laptop designed for professionals, featuring an M1 chip and Retina display.', stock: 5 },
  { id: 6, name: 'Dell XPS 13', price: 999, description: 'A sleek and portable laptop with a stunning InfinityEdge display and high performance.', stock: 9 }
];


export const initialCart: Cart[] = [];