import ComponentBanner from "@/components/Banner/Banner";
import ComponentCard from "@/components/Card/Card";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import Test1 from "@/components/test1";
import Development from "./Text/Development";





export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <Development />
    <ComponentBanner />
    <ComponentCard />
    <Test1 />
    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
