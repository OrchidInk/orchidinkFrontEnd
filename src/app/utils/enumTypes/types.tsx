export interface SubItem {
  title: string;
  url?: string;
}

export interface CategoryItem {
  title: string;
  url?: string;
  child?: SubItem[];  // Consistent child type
}

export interface MenuItem {
  title: string;
  url?: string;
  child?: SubItem[];  // If MenuItem has nested items
}

export interface Category {
  id: number;
  name: string;
  href?: string;  // Some components expect 'href' instead of 'url'
  icon?: React.ReactNode;
  child?: Category[];
}
