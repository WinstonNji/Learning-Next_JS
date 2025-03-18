import '../global.css'
import Link from 'next/link'

export default function blogHomePage(){
    return <>
        <h1>Blog Home Page</h1>
        <Link href={'/Products'} >Products</Link>
    </>
}