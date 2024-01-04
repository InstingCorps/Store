
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../Components/ListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../Components/InputID";
import DukunganPelanggan from "@/Contact/contactUs";
import React from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";

export const dynamic = "force-dynamic"

export default async function GoPay() {

    const Category = "E-Money"
    const Brand = "GO PAY"
    const imgUrl = 'https://jabarekspres.com/wp-content/uploads/2022/10/GOPAY-1.png';

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