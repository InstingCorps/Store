
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../pulsa/components/ListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../../pulsa/components/InputNomor";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function Tri() {

    const Category = "Pulsa"
    const Brand = "TRI"
    const img = "https://i.pinimg.com/originals/c8/40/87/c84087e787b376b50c42915b00671799.png"

    const [data] = await Promise.all([
        await GetApi(Category, Brand),
    ])

return (
    <main>
        <ComponentNavbar />
        <Development />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Brand}</div>
        <InputID />

        <ListItems data = {data} ImgSrc= {img}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}