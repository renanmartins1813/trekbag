import { createContext } from "react";

export type Item = {
    id: number;
    name: string;
    checked: boolean;
};

export type ItemsContextType = {
    items: Item[];
    handleAddItem: (newItemName: string) => void;
};

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

