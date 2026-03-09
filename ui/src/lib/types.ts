export interface INavMenuColumn {
  columnTitle: string;
  columnTitleLink: string;
  columnItems: INavMenuItem[];
}

export interface INavMenuItem {
  link: string;
  text: string;
}
