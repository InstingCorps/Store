'use client'

import { Button, Card } from "flowbite-react"

export default function Subscribe() {
    return(
        <div className="bg-color-accent mt-10 my-10">
    <div className="text-slate-800 text-xl text-center font-bold font-serif rounded">Berlangganan</div>
    <div className="text-2xl font-extrabold text-white text-center">Harga Lebih Murah</div>
<Card className="bg-white mb-10">
    <Button className="font-bold bg-color-secondary">Subscribe now!</Button>
    <div className="font-light">*dapatkan potongan harga hingga 10%</div>
    <div className="text-2xl text-slate-800 font-extrabold text-center">Dapatkan Penawaran Terbaik Sekarang</div>
</Card>
        </div>

    )
}

