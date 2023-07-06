import Swipers from "@/components/Banner/Banner";
import Testing from "@/components/Banner/tested";
import Test from "@/components/Card/test";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import Test1 from "@/components/test1";





export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <Testing />
    <Test />
    <Test1 />
    {/* <Swipers /> */}
    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
