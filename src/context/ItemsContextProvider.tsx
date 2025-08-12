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
    function handleDeleteItem(id: number) {
        const newItems: Item[] = items.filter((item) => {
            return item.id !== id
        })

        setItems(newItems)
    }
    function handleToggleCheck(id: number) {
        const newItems: Item[] = items.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked }
            }

            return item
        })

        setItems(newItems)
    }
    function handleMarkAllAsComplete() {
        const newItems: Item[] = items.map((item) => {
            return { ...item, checked: true }
        })

        setItems(newItems)
    }
    function handleMarkAllAsIncomplete() {
        const newItems: Item[] = items.map((item) => {
            return { ...item, checked: false }
        })

        setItems(newItems)
    }
    function handleResetToInitial() {
        setItems(initialItems)
    }

    function handleRemoveAllItems() {
        setItems([])
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider value={{
            items,
            handleAddItem,
            handleDeleteItem,
            handleToggleCheck,
            handleMarkAllAsComplete,
            handleMarkAllAsIncomplete,
            handleRemoveAllItems,
            handleResetToInitial,
        }}>
            {children}
        </ItemsContext.Provider>
    );
}

