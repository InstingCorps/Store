'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Valid from "../mobile-legends/components/buttons/CheckoutML";
import Tes222 from "@/components/dataToHash";


export default function About() {
    return(
    <Flowbite>
      <ComponentNavbar />
      <Tes222 />
      <Valid />
        <footer>
      <DarkThemeToggle />
            <ComponentFooter />
        </footer>

    </Flowbite>




    )
}