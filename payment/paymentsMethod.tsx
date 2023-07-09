'use client'

import { Button, Card } from "flowbite-react";

export default function PaymentMethod() {
    const Link = "/about"
    return(
        <div>
        <Card>
            <div>Payment Method Masih Dalam Proses</div>
           
        </Card>

        <Card className="mt-10">
        <Button
            href={Link}
            >Buy Now</Button>
        </Card>

        </div>
    )
}