'use client'
import { Button, Card } from "flowbite-react"

import "./styles.css"

export default function ComponentCard() {
    return(
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/mobile-legends"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1578906433-icon-Game-icon-4.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>
    )
}