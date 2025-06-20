export type User = {
  _id: string;
  name: string;
  email: string;
};

export type AuthStore = {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
};
