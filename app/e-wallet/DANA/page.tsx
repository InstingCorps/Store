
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../../components/ListItems/ListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../Components/InputID";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function DANA() {

    const Category = "E-Money"
    const Brand = "DANA"
    const imgUrl = '/assets/logoItems/DANALOGORS.webp';

    const [data] = await Promise.all([
        await GetApi(Category, Brand),
    ])

return (
    <main>
        <ComponentNavbar />
        <Development />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Brand}</div>
        <InputID />

        <ListItems data = {data} ImgSrc={imgUrl}/>
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}