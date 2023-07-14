'use client'

import { Button, Card } from "flowbite-react";

export default function PaymentMethod() {
    const Link = "/checkout"
    return(
        <div>
        <Card>
            <div>Payment Method Masih Dalam Proses</div>
           
        </Card>
        <Card className="mt-2">
    
            <div className="text-center font-medium">untuk sementara waktu semua pembelian kamu akan di arahkan ke whatsapp admin!</div>
        
        
        </Card>

        <Card className="mt-10">
        <Button
            href={Link}
            >Check Out Now</Button>
        </Card>

        </div>
    )
}