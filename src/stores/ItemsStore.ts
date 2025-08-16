import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export type Item = {
    id: number;
    name: string;
    checked: boolean;
};

type ItemsState = {
    items: Item[];
    addItem: (name: string) => void;
    deleteItem: (id: number) => void;
    toggleCheck: (id: number) => void;
    markAllAsComplete: () => void;
    markAllAsIncomplete: () => void;
    resetToInitial: () => void;
    removeAll: () => void;
};

export const useItemsStore = create<ItemsState>()(
    persist(
        (set) => ({
            items: initialItems,

            addItem: (name) =>
                set((state) => ({
                    items: [
                        ...state.items,
                        { id: Date.now(), name, checked: false },
                    ],
                })),

            deleteItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),

            toggleCheck: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id ? { ...item, checked: !item.checked } : item
                    ),
                })),

            markAllAsComplete: () =>
                set((state) => ({
                    items: state.items.map((item) => ({ ...item, checked: true })),
                })),

            markAllAsIncomplete: () =>
                set((state) => ({
                    items: state.items.map((item) => ({ ...item, checked: false })),
                })),

            resetToInitial: () => ({ items: initialItems }),

            removeAll: () => ({ items: [] }),
        }),
        {
            name: "items-storage", // key in localStorage
        }
    )
);

