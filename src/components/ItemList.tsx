import { useItemsContext } from "../lib/hooks"
import EmptyView from "./EmptyView"

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

export default function ItemList() {
    const { items } = useItemsContext()

    return (
        <ul className="item-list">
            {items.length === 0 && <EmptyView />}

            {items.map((item) => {
                return <Item key={item.id} name={item.name} id={item.id} checked={item.checked} />
            })}
        </ul>
    )
}

