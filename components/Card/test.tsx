'use client'
import { Card } from "flowbite-react"

import "./styles.css"

export default function Test() {
    return(
        <div className="mt-10 grid grid-cols-3 md:grid-cols-8 gap-4 m-9">
        <Card className="h-auto max-w-full rounded-lg ComCard"
         imgAlt=""
         href="/mobile-legends"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         
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