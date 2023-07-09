'use client'

import { Button, Card } from "flowbite-react"

export default function Null() {
    const Link = "http://wa.me/6288221574494?"
    return(
        <Card className="text-black bg-white">
            <div className="text-center">Masih dalam proses Development</div>
            <div className="font-bold text-center">Jika mengalami kendala saat pembelian hubungi Kami</div>
            <Button className="font-bold" href={Link}>Hubungi Kami</Button>
        </Card>
    )
}