'use client'
import { Button, Card } from "flowbite-react"

import "./styles.css"

export default function ComponentCard() {
    return(
        <div className="mt-10 grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card">
        <Card className="h-auto max-w-sm rounded-lg ComCard"
         imgAlt=""
         href="/mobile-legends"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
        <div className="font-extrabold content-center text-center">Mobile Legends</div>
         <Button className="btn-card" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-full rounded-xl ComCard"
         imgAlt=""
         href="/about"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         
         >
            <div className="font-extrabold content-center text-center">Genshin Impact</div>
            <Button color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-full rounded-lg ComCard"
         imgAlt=""
         href="/about"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         
         >
            <button>Topup</button>
        </Card>

        <Card className="h-auto max-w-full rounded-lg ComCard"
         imgAlt=""
         href="/about"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         
         >
            <button>Topup</button>
        </Card>

        <Card className="h-auto max-w-full rounded-lg ComCard"
         imgAlt=""
         href="/about"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         
         >
            <button>Topup</button>
        </Card>
        
        </div>
    )
}