export interface IPrice {
  amount: number;
  currency: string;
}

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export type Availability = 'out-of-stock' | 'in-stock' | 'low-stock';

export type Category = 'socks' | 'shoes';

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

export interface INavMenuItem {
  link: string;
  text: string;
}

export interface INavMenuColumn {
  title: string;
  titleLink: string;
  isHighlighted?: boolean;
  endItems?: INavMenuItem[];
}

export interface IImage {
  src: string;
  desc?: string;
}

export interface IModel<T extends Category> {
  modelId: string;
  color: string;
  availability: Availability;
  sizes: T extends 'shoes' ? ShoeSize[] : ClothingSize[];
  price: IPrice;
  tileImage1: IImage;
  tileImage2: IImage;
}

export interface IProduct<T extends Category = Category> {
  productId: string;
  name: string;
  description: string;
  category: T;
  releaseDate: string;
  models: IModel<T>[];
}

export interface ISearchedProduct {
  id: string;
  name: string;
  imgUrl: string;
  price: IPrice;
}

export interface ICartItem {
  id: string;
  productId: string;
  name: string;
  category: Category;
  model: string;
  size: ShoeSize | ClothingSize;
  imgUrl: string;
  price: IPrice;
  quantity: number;
}

export interface IOrderItem extends Omit<ICartItem, 'id'> {
  total: IPrice;
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
