'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';


export default function About() {
    return(
    <Flowbite>
      <ComponentNavbar />
        <footer>
      <DarkThemeToggle />
            <ComponentFooter />
        </footer>

    </Flowbite>




    )
}