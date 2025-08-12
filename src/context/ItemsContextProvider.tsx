import { useEffect, useState } from "react";
import { initialItems } from "../lib/constants";
import { ItemsContext, type Item } from "./ItemsContext";

type ItemsContextProviderProps = {
    children: React.ReactNode | React.ReactNode[];
};

export default function ItemsContextProvider({ children }: ItemsContextProviderProps) {
    const [items, setItems] = useState<Item[]>(() => {
        const stored = localStorage.getItem("items");
        return stored ? (JSON.parse(stored) as Item[]) : initialItems;
    });

    function handleAddItem(newItemName: string) {
        const newItem: Item = {
            id: new Date().getTime(),
            name: newItemName,
            checked: false,
        };

        setItems((prev) => [...prev, newItem]);
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider value={{ items, handleAddItem }}>
            {children}
        </ItemsContext.Provider>
    );
}

