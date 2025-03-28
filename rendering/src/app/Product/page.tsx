import Link from "next/link"

export default function MainProductPage(){
    return (
        <ul>
            <Link href={"/Product/1"}><li>Product 1</li></Link>
            <Link href={"/Product/2"}><li>Product 2</li></Link>
            <Link href={"/Product/3"}><li>Product 3</li></Link>
            {new Date().toLocaleTimeString()}
        </ul>
    )
}