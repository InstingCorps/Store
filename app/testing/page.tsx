'use client'
import ComponentNavbar from "@/components/Navbar/Navbar";
// import TabsWithIcons from "./tabs";
// import Footer from "./footer";
import React, { useState } from 'react';
import Maths from "./math";

export default function Testing() {

    const [showFooter, setShowFooter] = useState(false);

    const handleClick = () => {
      setShowFooter(true);
    }
    return(
        <main>
        {/* <ComponentNavbar /> */}
        {/* <TabsWithIcons /> */}
        <button onClick={handleClick}>test</button>
        <Maths />
        {/* {showFooter && <Footer />} */}
        </main>
    )
}

