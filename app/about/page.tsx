'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
import ComponentFooter from "@/components/footer/footer";
import { Card, DarkThemeToggle, Flowbite, Spinner } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';
// import Valid from "../mobile-legends/components/CheckoutML";


export default function About() {
    return(
    <Flowbite>
        <Card className="flex items-center justify-center px-6 py-10">
          <div className="font-bold">Wait...</div>
          <Spinner />
      </Card>
      <ComponentNavbar />
      {/* <Valid /> */}
        <footer>
      <DarkThemeToggle />
            <ComponentFooter />
        </footer>

    </Flowbite>




    )
}