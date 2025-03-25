import "./globals.css";
import Link from "next/link";


export default function Home () {
    return (
        <>
            <h1 className="text-3xl ">Welcome Home</h1>
            <Link href="/Blog">Blog</Link>
        </>
        
    )
}