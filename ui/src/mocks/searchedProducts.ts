import type { ISearchedProduct } from '@/lib/types';

export const searchedProducts: ISearchedProduct[] = [
  {
    id: '1',
    name: 'Nike Air Max 90',
    imgUrl: '/src/assets/images/sneaker-small.png',
    price: {
      amount: 129.99,
      currency: 'EUR',
    },
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    imgUrl: '/src/assets/images/sneaker-small.png',
    price: {
      amount: 159.99,
      currency: 'EUR',
    },
  },
  {
    id: '3',
    name: 'Puma RS-X',
    imgUrl: '/src/assets/images/sneaker-small.png',
    price: {
      amount: 99.99,
      currency: 'EUR',
    },
  },
  {
    id: '4',
    name: 'New Balance 574',
    imgUrl: '/src/assets/images/sneaker-small.png',
    price: {
      amount: 89.99,
      currency: 'EUR',
    },
  },
];
