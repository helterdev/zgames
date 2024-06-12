import "./Error.css";

interface ErrorProps {
    message?: string
}

export default function Error({ message }: ErrorProps) {
    return <>
        <span className="message">{message}</span>
    </>
}