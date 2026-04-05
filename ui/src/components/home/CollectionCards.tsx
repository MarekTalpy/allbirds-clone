import CollectionCard from './CollectionCard';

export interface ICollectionCard {
  title: string;
  description: string;
  link: string;
  imgMobile: ICollectionCardImg;
  imgDesktop: ICollectionCardImg;
  actions: ICollectionCardAction[];
}

interface ICollectionCardAction {
  title: string;
  link: string;
}

interface ICollectionCardImg {
  src: string;
  desc?: string;
}

const collectionCards: ICollectionCard[] = [
  {
    title: 'Breezer',
    description: 'This is what lightness feels like',
    link: '/collections/tree-breezer',
    imgMobile: {
      src: '/src/assets/images/breezer-mobile.webp',
    },
    imgDesktop: {
      src: '/src/assets/images/breezer-desktop.webp',
    },
    actions: [
      {
        title: 'FOR HER',
        link: '/collections/tree-breezer',
      },
    ],
  },
  {
    title: 'Dasher NZ',
    description: 'Comfort that keeps up with you',
    link: '/collections/dasher-nz',
    imgMobile: {
      src: '/src/assets/images/dasher-nz-mobile.webp',
    },
    imgDesktop: {
      src: '/src/assets/images/dasher-nz-desktop.webp',
    },
    actions: [
      {
        title: 'FOR HIM',
        link: '/collections/mens-dasher-nz',
      },
      {
        title: 'FOR HER',
        link: '/collections/womens-dasher-nz',
      },
    ],
  },
  {
    title: 'Terralux',
    description: 'One style. Endless possibilities.',
    link: '/collections/active-terralux',
    imgMobile: {
      src: '/src/assets/images/terralux-mobile.webp',
    },
    imgDesktop: {
      src: '/src/assets/images/terralux-desktop.webp',
    },
    actions: [
      {
        title: 'FOR HIM',
        link: '/collections/mens-active-terralux',
      },
      {
        title: 'FOR HER',
        link: '/collections/womens-active-terralux',
      },
    ],
  },
  {
    title: 'Waterproof',
    description: 'Rain? No problem!',
    link: '/collections/waterproof-shoes',
    imgMobile: {
      src: '/src/assets/images/waterproof-mobile.webp',
    },
    imgDesktop: {
      src: '/src/assets/images/waterproof-desktop.webp',
    },
    actions: [
      {
        title: 'FOR HIM',
        link: '/collections/mens-waterproof-shoes',
      },
      {
        title: 'FOR HER',
        link: '/collections/womens-waterproof-shoes',
      },
    ],
  },
];

const CollectionCards = () => collectionCards.map((card) => <CollectionCard key={card.link} card={card} />);

export default CollectionCards;
