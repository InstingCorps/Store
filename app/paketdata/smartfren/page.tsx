
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../pulsa/components/ListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../../pulsa/components/InputNomor";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function Smartfren() {

    const Category = "Data"
    const Brand = "SMARTFREN"
    const img = "https://iconlogovector.com/uploads/images/2023/02/lg-7ddabdb9dc09f1cdd7e876b39a7aa01731.jpg"

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