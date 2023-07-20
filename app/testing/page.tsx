'use client'
import Countdown from "@/components/CountDown/Countdown";
import ComponentNavbar from "@/components/Navbar/Navbar";
// import TabsWithIcons from "./tabs";
// import Footer from "./footer";
import React, { useState } from 'react';

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
        <Countdown />
        {/* {showFooter && <Footer />} */}
        </main>
    )
}

