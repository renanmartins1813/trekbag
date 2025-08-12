import { initialItems } from "../lib/constants"
import EmptyView from "./EmptyView"

type ItemProps = {
    // id: number,
    name: string,
    checked: boolean
}

function Item({ name, checked }: ItemProps) {
    return (
        <li className="item">
            <label htmlFor="">
                <input type="checkbox" checked={checked} />
                {name}
            </label>
            <button>❌</button>
        </li>
    )
}

export default function ItemList() {
    return (
        <ul className="item-list">
            {initialItems.length === 0 && <EmptyView />}

            {initialItems.map((item) => {
                return <Item key={item.id} name={item.name} checked={item.checked} />
            })}
        </ul>
    )
}

