
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../../components/ListItems/OthersListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../../pulsa/components/InputNomor";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function AXIS() {

    const Category = "Pulsa"
    const Brand = "AXIS"
    const img = "https://iconlogovector.com/uploads/images/2023/02/lg-ab245e14c10da5c9ffb63f047c1b7fdc74.jpg"

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