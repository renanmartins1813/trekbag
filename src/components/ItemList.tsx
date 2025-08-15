import Select, { type SingleValue } from "react-select"
import { useItemsContext } from "../lib/hooks"
import EmptyView from "./EmptyView"
import { useMemo, useState } from "react"

type ItemProps = {
    id: number,
    name: string,
    checked: boolean
}

function Item({ name, id, checked }: ItemProps) {
    const { handleDeleteItem, handleToggleCheck } = useItemsContext()

    return (
        <li className="item">
            <label htmlFor="" onClick={() => handleToggleCheck(id)}>
                <input type="checkbox" checked={checked} />
                {name}
            </label>
            <button onClick={() => handleDeleteItem(id)}>❌</button>
        </li>
    )
}
type SortOption = {
    label: string;
    value: "default" | "checked" | "unchecked";
};

const sortingOptions: SortOption[] = [
    { label: 'Sort by default', value: 'default' },
    { label: 'Sort by checked', value: 'checked' },
    { label: 'Sort by unchecked', value: 'unchecked' }
];

export default function ItemList() {
    const { items } = useItemsContext()
    const [sortBy, setSortBy] = useState("default");

    const sortedItems = useMemo(() => {
        return (
            [...items].sort((a, b) => {
                if (sortBy === 'checked') {
                    return Number(b.checked) - Number(a.checked)
                }
                if (sortBy === 'unchecked') {
                    return Number(a.checked) - Number(b.checked)
                }

                return 0
            })
        )

    }, [items, sortBy])

    return (
        <ul className="item-list">
            {items.length === 0 && <EmptyView />}

            {items.length > 0 && <section className="sorting">
                <Select
                    options={sortingOptions}
                    defaultValue={sortingOptions[0]}
                    onChange={(option: SingleValue<SortOption>) => {
                        if (option) {
                            setSortBy(option.value)
                        }
                    }}
                />
            </section>}

            {sortedItems.map((item) => {
                return <Item key={item.id} name={item.name} id={item.id} checked={item.checked} />
            })}
        </ul>
    )
}

