
export default async function SingleProduct (
    {params} : {params : Promise<{productId : string}>}
){
    const {productId} = await params 
    return <>

        <h1>Detail Product Page for product {productId}</h1>
    </>
}