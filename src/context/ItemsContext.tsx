import { createContext } from "react";

export type Item = {
    id: number;
    name: string;
    checked: boolean;
};

export type ItemsContextType = {
    items: Item[],
    handleAddItem: (newItemName: string) => void,
    handleDeleteItem: (id: number) => void,
    handleToggleCheck: (id: number) => void,
    handleRemoveAllItems: () => void,
    handleResetToInitial: () => void,
    handleMarkAllAsComplete: () => void,
    handleMarkAllAsIncomplete: () => void,
};

export const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

