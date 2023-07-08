'use client'

import { Card } from "flowbite-react";


export default function CardTest2 () {
    return(
        <div className="mt-10 grid grid-cols-3 md:grid-cols-8 gap-4 m-3">
            <Card className="p-0"
        imgAlt=""
        href="/mobile-legends"
        imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
            >
        {/* <div>pa</div> */}
            </Card>
            <Card>
        <img src="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg" alt="" />
        <div>Topup</div>
            </Card>
        </div>
    )
}