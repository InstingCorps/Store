
import ComponentNavbar from "@/components/Navbar/Navbar";
import ListItems from "../../../components/ListItems/OthersListItems";
import ComponentFooter from "@/components/footer/footer";
import Development from "@/components/Text/Development";
import InputID from "../Components/InputID";
import DukunganPelanggan from "@/Contact/contactUs";
import React, { Suspense } from "react";
import { GetApi } from "@/app/services/getproductDigiflazz";
import Loading from "./loading";

export const dynamic = "force-dynamic"

export default async function ShopeePay() {

    const Category = "E-Money"
    const Brand = "SHOPEE PAY"
    const imgUrl = 'https://rb.gy/323duc';

    const [data] = await Promise.all([
        await GetApi(Category, Brand),
    ])

return (
    <main>
        <ComponentNavbar />
        <Development />
        <Suspense fallback={<Loading />}>
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">{Brand}</div>
        <InputID />

        <ListItems data = {data} ImgSrc={imgUrl}/>
        <DukunganPelanggan />
        </Suspense>

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}