import '../globals.css'
import Link from 'next/link'

export default async function blogHomePage(){
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Intentional delay')
        }, 2000)
    })
    return <>
        <h1>Blog Home Page</h1>

        <Link  href={'/Products'} >Products</Link>
    </>
}