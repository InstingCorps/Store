
import ComponentNavbar from "@/components/Navbar/Navbar";
const DiamondList = React.lazy(() => import("@/components/ListItems/GamesListItems"));
import ComponentFooter from "@/components/footer/footer";
import Test from "../../../components/Text/Development";
import InputID from "./inputID/InputID";
import Cards from "../components/Card";
import DukunganPelanggan from "@/Contact/contactUs";
import React, { Suspense } from "react";
import { GetApi } from "../../services/getproductDigiflazz";
import Loader from "@/components/Loading/Loader";

export const dynamic = "force-dynamic"

export default async function MobileLegends() {

    const Category = "Games"
    const Games = "MOBILE LEGENDS"
    const imgCards = "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/ID_MLBB-M4-Codacash-tile.jpg"
    const imgList = "https://shorturl.at/jlqPY"
    const Description = "Mobile Legends: Bang Bang Dirilis pada tahun 2016, Mobile Legends: Bang Bang merupakan Mobile Multiplayer Online Battle Arena yang dikembangkan oleh Moonton. Game ini sangat populer terutama di Asia Tenggara dan menjadi salah satu game terpilih untuk kompetisi e-sport pertama di ASEAN Games Filipina, 2019 lalu."

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
        <Suspense fallback={<Loader />}>
        <DiamondList data = {data} ImgSrc= {imgList}/>
        </Suspense>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}