'use client'
import { Button, Card } from "flowbite-react"

import "./styles.css"

export default function ComponentCard() {
    
    const TypeGame = (Game : any) => {
        sessionStorage.clear();
        sessionStorage.setItem('TypeGame' , Game)
        
    }
    return(
        <div>
            <div className="ml-4 text-orange-400 text-xl font-serif font-bold">Game Populer</div>
            <div className="text-2xl font-extrabold text-white ml-5 mb-10">Trending Sekarang</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
        
         imgAlt="Mobile Legends"
         href="/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt="Genshin Impact"
         href="/genshin-impact"
         onClick={() => TypeGame("Genshin Impact")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1645066883-icon-WeChat%20Image_20220217093952.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt="FreeFire"
         href="/freefire"
         onClick={() => TypeGame("Free Fire")}

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
         href="/clashofclans"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_Clash-of-Clans-20%20(1).jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">All Games</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Semua Games Kami</div>
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
         imgAlt="FreeFire"
         href="/freefire"
         onClick={() => TypeGame("Free Fire")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/clashofclans"
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_Clash-of-Clans-20%20(1).jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/toweroffantasy"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/CODM"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1633599388-icon-Icon_1024.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/undawn"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1689159121-icon-garena-undawn.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/metalslug-awakening"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1691644925-icon-App%20Icon%20200x200_11zon.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/ragnarok-origin"
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1680764749-icon-%E5%9B%BE%E7%89%87_20230406150453.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        </div>

          {/* element ke dua */}
          <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Your favorit</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Game Favorit Kamu</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>

        {/* element ke tiga */}
        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Best Selling!</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Paling Banyak Di minati!</div>
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
            imgAlt="FreeFire"
            href="/freefire"
            onClick={() => TypeGame("Free Fire")}
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
        
      
        
        </div>
    )
}