import { create } from 'zustand'

export const useQuoteStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
  clearQuote: () => set({ items: [] }),
}))