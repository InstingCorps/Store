import ComponentNavbar from "@/components/Navbar/Navbar";
import ButtonPills from "@/app/mobile-legends/components/buttons/buttons";
import ComponentFooter from "@/components/footer/footer";
import Test from "../Text/Development";

export default function MobileLegends() {
return(
    <main>
        <ComponentNavbar />
        <Test />
        <ButtonPills />

        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}