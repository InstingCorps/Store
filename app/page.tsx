import ComponentBanner from "@/components/Banner/Banner";
import ComponentCard from "@/components/Card/Card";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import Test1 from "@/components/test1";
import Test from "./Text/Test";





export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <ComponentBanner />
    <Test />
    <ComponentCard />
    <Test1 />
    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
