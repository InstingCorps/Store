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
         href="/games/mobile-legends"
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
         href="/games/freefire"
         onClick={() => TypeGame("Free Fire")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         onClick={() => TypeGame("PUBG M")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1578906433-icon-Game-icon-4.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/genshin-impact"
         onClick={() => TypeGame("Tower Of Fantasy")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/clashofclans"
         onClick={() => TypeGame("Clash Of Clans")}
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
         href="/games/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt="FreeFire"
         href="/games/freefire"
         onClick={() => TypeGame("Free Fire")}

         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/clashofclans"
         onClick={() => TypeGame("Clash Of Clans")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_Clash-of-Clans-20%20(1).jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/toweroffantasy"
         onClick={() => TypeGame("Tower Of Fantasy")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1663645620-icon-1662619195-icon-1662082730-icon-Tower%20of%20Fantasy%20logo%20-%201%20jpg.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/CODM"
         onClick={() => TypeGame("Call Of Duty M")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1633599388-icon-Icon_1024.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/undawn"
         onClick={() => TypeGame("Undawn")}
         imgSrc="https://cdn.unipin.com/images/icon_product_pages/1689159121-icon-garena-undawn.jpg"
         >
        <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/metalslug-awakening"
         onClick={() => TypeGame("Metal Slug -Awakening")}
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
         href="/games/mobile-legends"
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
         href="/games/mobile-legends"
         onClick={() => TypeGame("Mobile Legends")}
         imgSrc="https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>

        <Card className="h-auto max-w-sm rounded-xl ComCard"
            imgAlt="FreeFire"
            href="/games/freefire"
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

        {/* elemen selanjutnya */}

        <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Pulsa</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Isi Pulsa Mu Di Sini!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/telkomsel"
         onClick={() => TypeGame("Telkomsel")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-71eeecf62194036fbf9a882f16a3e67913.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/smartfren"
         onClick={() => TypeGame("Smartfren")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-7ddabdb9dc09f1cdd7e876b39a7aa01731.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/axis"
         onClick={() => TypeGame("Axis")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-ab245e14c10da5c9ffb63f047c1b7fdc74.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/indosat"
         onClick={() => TypeGame("Indosat")}
         imgSrc="https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/XL"
         onClick={() => TypeGame("XL")}
         imgSrc="https://www.pe-we.com/wp-content/uploads/2017/07/logo-XL.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/pulsa/tri"
         onClick={() => TypeGame("TRI")}
         imgSrc="https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>
                {/* elemen selanjutnya */}

                <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Paket Data</div>
        <div className="text-2xl font-extrabold text-white ml-5 mb-10">Isi Paket Data Mu Di Sini!</div>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 m-3 btn-card ComCard mt-5">
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/indosat"
         onClick={() => TypeGame("Indosat")}
         imgSrc="https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/telkomsel"
         onClick={() => TypeGame("Telkomsel")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-71eeecf62194036fbf9a882f16a3e67913.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/smartfren"
         onClick={() => TypeGame("Smartfren")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-7ddabdb9dc09f1cdd7e876b39a7aa01731.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/tri"
         onClick={() => TypeGame("TRI")}
         imgSrc="https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/axis"
         onClick={() => TypeGame("Axis")}
         imgSrc="https://iconlogovector.com/uploads/images/2023/02/lg-ab245e14c10da5c9ffb63f047c1b7fdc74.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        <Card className="h-auto max-w-sm rounded-xl ComCard"
         imgAlt=""
         href="/paketdata/XL"
         onClick={() => TypeGame("XL")}
         imgSrc="https://www.pe-we.com/wp-content/uploads/2017/07/logo-XL.jpg"
         >
         <Button className="btn-card font-extrabold ComCard" color="gray">Topup</Button>
        </Card>
        </div>
        
      
        
        </div>
    )
}