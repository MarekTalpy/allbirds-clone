export interface INavMenuColumn {
  title: string;
  titleLink: string;
  isHighlighted?: boolean;
  endItems?: INavMenuItem[];
}

export interface INavMenuItem {
  link: string;
  text: string;
}

export interface IPrice {
  amount: number;
  currency: string;
}

export interface ISearchedProduct {
  id: string;
  name: string;
  imgUrl: string;
  price: IPrice;
}

export interface IOrder {
  id: string;
  items: IOrderItem[];
  itemsTotal: IPrice;
  shipping: IPrice;
  total: IPrice;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string;
}

export interface IOrderItem {
  productId: string;
  category: string;
  name: string;
  imgUrl: string;
  price: IPrice;
  quantity: number;
  total: IPrice;
  model: string;
  size: string;
}

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export type ClothingSize = 'S' | 'M' | 'L' | 'XL';

export type ShoeSize =
  | '40'
  | '40.5'
  | '41'
  | '41.5'
  | '42'
  | '42.5'
  | '43'
  | '43.5'
  | '44'
  | '44.5'
  | '45'
  | '45.5'
  | '46'
  | '46.5'
  | '47';

export type ClothingProduct = {
  category: 'socks' | 'clothing';
  size: ClothingSize;
};

export type ShoeProduct = {
  category: 'shoes';
  size: ShoeSize;
};

export type CartProduct = ClothingProduct | ShoeProduct;

export type CartItem = CartProduct & {
  id: string;
  name: string;
  imgUrl: string;
  price: IPrice;
  quantity: number;
  model: string;
};
