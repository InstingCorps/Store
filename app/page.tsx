import Swipers from "@/components/Banner/Banner";
import SlideChangeEvent from "@/components/Banner/test";
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import MyPage from "@/components/test";





export default function Home() {
  return (
   <>
    <ComponentNavbar />
    <MyPage />
    <footer>
      <ComponentFooter />
    </footer>
   </>
  )
}
