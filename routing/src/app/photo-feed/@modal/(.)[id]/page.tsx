'use client'

import Image from "next/image";
import wondersImages from "@/app/photo-feed/wonders";
import { useRouter } from "next/navigation";

export default function Interceptor({params}) {
    const { id } = params; // Destructure `id` from `params`

    const router = useRouter();

    // Find the photo matching the `id` in the wondersImages array
    const photo = wondersImages.find((p) => p.id === id);

    return (
        <div className="fixed left-[50%] -translate-x-[50%] -translate-y-[50%] top-[50%] p-6 bg-white w-64">

            {!photo && (
                <h1>Photo Not Found</h1>
            )}

            {photo && (
                <>
                <div className="flex justify-between items-center w-full">
                    <button onClick={() => router.back()} className="text-end font-bold cursor-pointer pb-4">
                        Close
                    </button>
                    <button onClick={()=>  window.location.href = window.location.href}>
                        View Details
                    </button>
                </div>
            
                <div>
                    <Image alt={photo.name} src={photo.src} className="w-full object-cover" />
                </div>
                <div className="bg-white p-4">
                    <h2 className="text-xl font-semibold">{photo.name}</h2>
                    <h3>{photo.location}</h3>
                </div>
                </>
                
            )}
        </div>
    );
}
