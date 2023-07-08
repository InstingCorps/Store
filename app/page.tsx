import ComponentBanner from "@/components/Banner/Banner";
import ComponentCard from "@/components/Card/Card";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import Development from "./Text/Development";
import Null from "@/Contact/Callme";
import Subscribe from "@/Contact/subscribe";
import BestSelling from "@/components/Card/bestSelling";




export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <Development />
    <div className="ml-4 text-orange-400 text-xl mt-10 font-serif font-bold">Unggulan Kami</div>
    <div className="text-2xl font-extrabold text-white ml-5">Features</div>
    <ComponentBanner />
    <div className="ml-4 text-orange-400 text-xl font-serif font-bold">Game Populer</div>
    <div className="text-2xl font-extrabold text-white ml-5 mb-10">Trending Sekarang</div>
    <ComponentCard />
    <div className="ml-4 text-orange-400 text-xl font-serif mt-10 font-bold">Best Selling!</div>
    <div className="text-2xl font-extrabold text-white ml-5 mb-10">Paling Banyak Di minati!</div>
    <BestSelling />
    <Subscribe />
    <div className="text-orange-400 text-xl text-center font-serif mt-36 font-bold">Dukungan Pelanggan</div>
    <div className="text-2xl font-extrabold text-white text-center">Hubungi Kami</div>
    <Null />

    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
