import create from 'zustand';
import { Cake } from '@/entities/cake/types';

interface CartState {
  items: Cake[];
  add: (cake: Cake) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (cake) => set((state) => ({ items: [...state.items, cake] })),
  remove: (id) => set((state) => ({ items: state.items.filter((c) => c.id !== id) })),
  clear: () => set({ items: [] }),
}));
