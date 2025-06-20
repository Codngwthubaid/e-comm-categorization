import { create } from 'zustand';
import { useAuthStore } from './auth.store';
import type { CategoryStore } from '@/types/category.types';
import { axiosInstance } from '@/lib/axiosInstance';

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  categories: [],
  selected: [],
  page: 1,
  setPage: (page: number) => set({ page }),

  fetchCategories: async () => {
    try {
      const token = (useAuthStore.getState() as { token: string | null }).token;
      const { page } = get();
      const res = await axiosInstance.get(`/categories?page=${page}&limit=6`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ categories: res.data.categories });
    } catch (err) {
      console.error("Failed to load categories");
    }
  },

  toggleCategory: (id: string) => {
    const { selected } = get();
    if (selected.includes(id)) {
      set({ selected: selected.filter((x: string) => x !== id) });
    } else {
      set({ selected: [...selected, id] });
    }
  },

  saveSelected: async () => {
    const token = (useAuthStore.getState() as { token: string | null }).token;
    const { selected } = get();
    try {
      await axiosInstance.post("/categories/select",
        { categoryIds: selected },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Categories saved!");
    } catch (err) {
      alert("Failed to save");
    }
  },
}));
