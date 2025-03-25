import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function PhotoFeed (){
    return <div>
        <h1 className=" font-bold text-center">New Wonders of the World</h1>

        <div className="place-center grid grid-cols-2 md:grid-cols-4 gap-8" >
            {wonders.map(({id,name,src}) => (
                <div key={id} className="w-64">
                    <Link href={`photo-feed/${id}`}>
                        <Image
                            alt={name}
                            src={src}
                            className="w-full object-cover aspect-square"
                        />
                    </Link>
                </div>
                
            ) )}
        </div>
    </div>
}