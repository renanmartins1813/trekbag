type ButtonProps = {
    buttonType: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode | React.ReactNode[]
}

export default function Button({ buttonType, onClick, children }: ButtonProps) {
    return (
        <button onClick={onClick} className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>{children}</button>
    )
}

