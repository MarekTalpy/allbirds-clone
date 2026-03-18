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
