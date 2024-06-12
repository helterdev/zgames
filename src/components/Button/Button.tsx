import "./Button.css";

interface ButtonProps {
    type?: string,
    text?: string
}

export default function Button({ type, text }: ButtonProps) {
    return <div>
        <button className="button">{text}</button>
    </div>
}