import Swipers from "@/components/Banner/Banner";
import Testing from "@/components/Banner/tested";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import MyPage from "@/components/test";





export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <MyPage />
    <Testing />
    {/* <Swipers /> */}
    <br />
    <br />
    <br />
    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
