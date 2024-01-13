
import ComponentNavbar from "@/components/Navbar/Navbar";
import DiamondList from "@/components/ListItems/GamesListItems";
import ComponentFooter from "@/components/footer/footer";
import Test from "../../../components/Text/Development";
import InputID from "../components/InputID";
import Cards from "../components/Card";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "../../services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function FreeFire() {

    const Category = "Games"
    const Games = "FREE FIRE"
    const imgCards = "https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
    const imgList = "https://i.pinimg.com/originals/56/e6/45/56e6459b4fd270b88f7038c1f6f8dd4a.png"
    const Description = "Free Fire adalah permainan battle royale yang dikembangkan oleh 111 Dots Studio dan diterbitkan oleh Garena. Dirilis pada 4 Desember 2017, Free Fire menghadirkan pertempuran intens antara 50 pemain di pulau terpencil. Pemain melompat dari pesawat, mencari senjata dan perlengkapan, dan berusaha menjadi yang terakhir bertahan hidup saat peta permainan menyusut secara bertahap. Dengan karakter unik yang memiliki keterampilan khusus, berbagai senjata, dan mode permainan yang beragam, Free Fire telah menjadi populer di kalangan pemain dan juga mencatat keberhasilan dalam dunia esport."

    const [data] = await Promise.all([
        await GetApi(Category, Games),
    ])

return (
    <main>
        <ComponentNavbar />
        <Test />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Games}</div>
        <Cards img={imgCards} headers={Games} body= {Description}/>
        <InputID />

        <DiamondList data = {data} ImgSrc= {imgList}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}