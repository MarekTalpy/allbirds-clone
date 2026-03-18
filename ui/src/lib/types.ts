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
