
import Link from "next/link"
import "./Navbar.css";
import { url } from "inspector";

interface NavbarProps {
    text: string,
    url: string
}

export default function Navbar({ text, url }: NavbarProps) {

    return <header>
        <div className="header-content">
            <Link href={url} className="content-button">{text}</Link>
        </div>
    </header>
}