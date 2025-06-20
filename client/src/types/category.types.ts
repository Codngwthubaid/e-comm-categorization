
export type Category = {
  _id: string;
  name: string;
  description: string;
  image: string;
};

export type CategoryStore = {
  categories: Category[];
  selected: string[];
  page: number;
  setPage: (page: number) => void;
  fetchCategories: () => Promise<void>;
  toggleCategory: (id: string) => void;
  saveSelected: () => Promise<void>;
};
