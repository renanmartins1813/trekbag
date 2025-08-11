import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm() {
    const [item, setItem] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFormSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!item) {
            alert("Item  can not be empty");
            inputRef.current?.focus();
            return
        }


    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setItem(event.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Add an item</h2>
            <input type="text" ref={inputRef} autoFocus={true} value={item} onChange={handleInputChange} />
            <Button buttonType="default">Add to list</Button>
        </form>
    )
}

