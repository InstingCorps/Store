
import ComponentNavbar from "@/components/Navbar/Navbar";
import DiamondList from "@/app/mobile-legends/components/diamonds/Diamonds";
import ComponentFooter from "@/components/footer/footer";
import Test from "../Text/Development";
import InputID from "./components/inputID/InputID";
import Cards from "./components/card/Card";
import DukunganPelanggan from "@/Contact/Callme";
import React from "react";
import { GetApi } from "../services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function MobileLegends() {

    const [data] = await Promise.all([
        await GetApi("Games", "MOBILE LEGENDS"),
    ])

return (
    <main>
        <ComponentNavbar />
        <Test />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">Mobile Legends</div>
        <Cards />
        {/* <Card className="font-bold ml-2 m-5 mt-10">Langkah 1. Masukkan ID Game Anda.</Card> */}
        <InputID />
        {/* <Card className="font-bold ml-2 m-5">Langkah 2. Pilih Jumlah Diamond.</Card> */}

        <DiamondList data = {data}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}