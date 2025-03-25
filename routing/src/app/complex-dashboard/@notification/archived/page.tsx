import Link from "next/link";
import { Card } from "../../../../../components/card";


export default function Archived(){
    return <Card>
        <div>View Default  
            <Link href={'/complex-dashboard'}>Default</Link>
        </div>
    </Card>
}