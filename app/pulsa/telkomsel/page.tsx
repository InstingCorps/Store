
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../../components/ListItems/ListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../../pulsa/components/InputNomor";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function Telkomsel() {

    const Category = "Pulsa"
    const Brand = "TELKOMSEL"
    const img = "https://iconlogovector.com/uploads/images/2023/02/lg-71eeecf62194036fbf9a882f16a3e67913.jpg"

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