import Link from "next/link"

export default function ProductLanding(){
    const productId = 3
    return (
        <ul>
            <li> 
                <Link href={`/Products/${productId}`} replace>Product 1</Link>
                <Link>Place Order</Link>
            </li>
            <li><Link href={`/Products/${productId}`} replace>Product 2</Link></li>
            <li><Link href={`/Products/${productId}`} replace>Product 3</Link></li>
        </ul>
    )
}