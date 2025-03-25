function getRandomInt (count : number){
    return Math.floor(Math.random() * count)
}


export default async function SingleProduct (
    {params} : {params : Promise<{productId : string}>}
){
    const random = getRandomInt(2) 
    if(random === 1){
        throw new Error ('Error loading review') 
    }

    const {productId} = await params 
    return <>
        <h1>Detail Product Page for product {productId}</h1>
    </>
}