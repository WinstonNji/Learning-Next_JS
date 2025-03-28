import Product from "../../components/Product"
import Reviews from "../../components/Reviews"
import { Suspense } from "react"
export default function ProductReview (){
    return (
        <div>
            <h1>Product Review</h1>
            <Suspense fallback = {<p>Loading</p>}>
                <Reviews></Reviews>
            </Suspense>
            <Product></Product>
        </div>
    )
}