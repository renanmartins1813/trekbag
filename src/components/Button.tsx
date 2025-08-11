type ButtonProps = {
    buttonType: string,
    children: React.ReactNode | React.ReactNode[]
}

export default function Button({ buttonType, children }: ButtonProps) {
    return (
        <button className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>{children}</button>
    )
}

