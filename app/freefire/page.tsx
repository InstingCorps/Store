'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
import Development from "../Text/Development";
import { Card } from "flowbite-react";
import PaymentMethod from "@/payment/paymentsMethod";
import DukunganPelanggan from "@/Contact/Callme";
import ComponentFooter from "@/components/footer/footer";
import Cards from "./components/FreeFireCard";
import InputID from "./components/FreeFireInputID";
import Diamonds from "./components/FreeFireDiamonds";


export default function FreeFire() {
    return(
        <main>
        <ComponentNavbar />
        <Development />
        <div className="text-center text-white mt-10 text-4xl font-extrabold font-sans">Free Fire</div>
        <Cards />
        <Card className="font-bold ml-2 m-5 mt-10">Langkah 1. Masukkan ID Game Anda.</Card>
        <InputID />
        <Card className="font-bold ml-2 m-5">Langkah 2. Pilih Jumlah Diamond.</Card>

        <Diamonds />
        <Card className="font-bold ml-2 m-5">Langkah 3. Pilih Methode Pembayaran.</Card>

        <PaymentMethod />
        <DukunganPelanggan />

        <footer>
            <ComponentFooter />
        </footer>
        </main>
    )
}