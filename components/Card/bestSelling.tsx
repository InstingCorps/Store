'use client'
import { Button, Card } from "flowbite-react"

import "./styles.css"

export default function BestSelling() {
    const TypeGame = (Game : any) => {
        sessionStorage.setItem('TypeGame' , Game)
        
    }
    return(
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
        
         imgAlt=""
         href="/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_FF-tile-cb-sd100k.jpg"
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
        </div>
    )
}