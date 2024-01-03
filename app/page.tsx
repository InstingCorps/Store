'use client'
import { useEffect } from 'react';
import ComponentBanner from "@/components/Banner/Banner";
import ComponentCard from "@/components/Card/Card";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import Development from "../components/Text/Development";
import Subscribe from "@/Contact/subscribe";
import DukunganPelanggan from "@/Contact/contactUs";


export default function Home() {

  useEffect(() => {
    // Mendapatkan lebar layar
    const lebarLayar = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Mengecek apakah lebar layar lebih dari 700 piksel
    if (lebarLayar > 700) {
      // Redirect atau pindahkan pengguna ke halaman lain
      window.location.href = '/othersPage/supportedDevice' // Ganti dengan path halaman lain
    }
  }, []); // Efek ini hanya dijalankan saat komponen dipasang
  return (
   <>
    <ComponentNavbar />
    <Development />
    <div className="ml-4 text-orange-400 text-xl mt-10 font-serif font-bold">Unggulan Kami</div>
    <div className="text-2xl font-extrabold text-white ml-5">Features</div>
    <ComponentBanner />
    <ComponentCard />
    <Subscribe />
 
    <DukunganPelanggan />

    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
