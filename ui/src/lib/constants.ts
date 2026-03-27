export const MENU_ITEMS = [
  {
    title: 'Men',
    titleLink: 'men',
    isHighlighted: false,
    menuItems: [
      {
        title: 'Shoes',
        titleLink: 'shoes',
        isHighlighted: false,
        endItems: [
          { text: 'Sneaker', link: 'mens-sneaker' },
          { text: 'Active shoes', link: 'mens-active-shoes' },
          { text: 'Water-repellent shoes', link: 'mens-water-repellent-shoes' },
          { text: 'Waterproof shoes', link: 'mens-waterproof-shoes' },
        ],
      },
      {
        title: 'Bestseller',
        titleLink: 'bestseller',
        endItems: [
          { text: 'Tree Runner NZ', link: 'mens-tree-runner-nz' },
          { text: 'Tree Runner', link: 'mens-tree-runner' },
          { text: 'Cruiser', link: 'mens-cruiser' },
          { text: 'Wall Runner', link: 'mens-wall-runner' },
        ],
      },
      {
        title: 'New Arrivals',
        titleLink: 'new-arrivals',
        endItems: [
          { text: 'Dasher NZ', link: 'mens-dasher-nz' },
          { text: 'Cruiser Canvas', link: 'mens-cruiser-canvas' },
          { text: 'Terralux', link: 'mens-active-terralux' },
          { text: 'Varsity', link: 'mens-varsity' },
          { text: 'Varsity Cruiser', link: 'mens-varsity-cruiser' },
        ],
      },
    ],
  },
  {
    title: 'Women',
    titleLink: 'women',
    isHighlighted: false,
    menuItems: [
      {
        title: 'Shoes',
        titleLink: 'shoes',
        isHighlighted: false,
        endItems: [
          { text: 'Sneaker', link: 'womens-sneaker' },
          { text: 'Active shoes', link: 'womens-active-shoes' },
          { text: 'Flats', link: 'flats' },
          { text: 'Water-repellent shoes', link: 'womens-water-repellent-shoes' },
          { text: 'Waterproof shoes', link: 'womens-waterproof-shoes' },
        ],
      },
      {
        title: 'Bestseller',
        titleLink: 'bestseller',
        isHighlighted: false,
        endItems: [
          { text: 'Tree Runner NZ', link: 'womens-tree-runner-nz' },
          { text: 'Tree Runner', link: 'womens-tree-runner' },
          { text: 'Cruiser', link: 'womens-cruiser' },
          { text: 'Wall Runner', link: 'womens-wall-runner' },
          { text: 'Tree Breezer', link: 'tree-breezer' },
        ],
      },
      {
        title: 'New Arrivals',
        titleLink: 'new-arrivals',
        isHighlighted: false,
        endItems: [
          { text: 'Dasher NZ', link: 'womens-dasher-nz' },
          { text: 'Cruiser Canvas', link: 'womens-cruiser-canvas' },
          { text: 'Terralux', link: 'womens-active-terralux' },
          { text: 'Varsity', link: 'womens-varsity' },
          { text: 'Breezer Mary Jane', link: 'breezer-mary-jane' },
        ],
      },
    ],
  },
  {
    title: 'Socks',
    titleLink: 'socks',
    isHighlighted: false,
  },
  {
    title: 'Sale',
    titleLink: 'sale',
    isHighlighted: true,
  },
  {
    title: 'Sustainability',
    titleLink: 'sustainability',
    isHighlighted: false,
    menuItems: [
      {
        title: 'Sustainability',
        titleLink: 'sustainability',
        isHighlighted: false,
        endItems: [
          { text: 'Reversing climate change', link: 'reversing-climate-change' },
          { text: 'How we work', link: 'how-we-work' },
          { text: 'CO2 footprint', link: 'co2-footprint' },
          { text: 'Renewable raw materials', link: 'renewable-raw-materials' },
          { text: 'Climate compensation', link: 'climate-compensation' },
          { text: 'Responsible energy use', link: 'responsible-energy-use' },
          { text: 'Materials', link: 'materials' },
        ],
      },
    ],
  },
];

export const SIDE_PANEL_ANIMATION_DURATION = 400;
