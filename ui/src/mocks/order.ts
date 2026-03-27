import type { IOrder } from '@/lib/types';

export const order: IOrder = {
  id: 'ORD-20260326-1234',
  itemsTotal: {
    amount: 127.99,
    currency: '$',
  },
  shipping: {
    amount: 7.99,
    currency: '$',
  },
  total: {
    amount: 135.98,
    currency: '$',
  },
  status: 'pending',
  createdAt: new Date().toISOString(),
  items: [
    {
      productId: 'p1',
      category: 'socks',
      name: 'Socks AnytimeNo Show',
      imgUrl: '/src/assets/images/sneaker-medium.png',
      price: {
        currency: '$',
        amount: 18.0,
      },
      total: {
        currency: '$',
        amount: 36.0,
      },
      quantity: 2,
      model: 'blizzard',
      size: 'M',
    },
    {
      productId: 'p2',
      category: 'shoes',
      name: 'M Tree Runner casual shoes',
      imgUrl: '/src/assets/images/sneaker-medium.png',
      price: {
        currency: '$',
        amount: 120.0,
      },
      quantity: 1,
      total: {
        currency: '$',
        amount: 120.0,
      },
      model: 'jet black (white)',
      size: '43.5',
    },
  ],
};
