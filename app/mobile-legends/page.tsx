import ComponentNavbar from "@/components/Navbar/Navbar";
import ButtonPills from "@/app/mobile-legends/components/buttons/buttons";
import ComponentFooter from "@/components/footer/footer";

export default function MobileLegends() {
return(
    <main>
        <ComponentNavbar />
        <ButtonPills />
        <footer>
            <ComponentFooter />
        </footer>
    </main>
)
}