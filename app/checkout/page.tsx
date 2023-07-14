'use client'


import CheckoutFF from "../freefire/components/FreeFireCheckout"
import React, { useState, useEffect } from 'react';
import CheckoutML from "../mobile-legends/components/buttons/CheckoutML";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/Callme";





export default function Checkout() {
    const [TypeGame , setTypeGame] = useState('')

    useEffect(() => {
        const getTypeGame = sessionStorage.getItem('TypeGame')

        if (getTypeGame) {
            setTypeGame(getTypeGame)}
    },[])

    
   if (TypeGame == "Free Fire") {
    return (
        <div>
            <CheckoutFF />
            <DukunganPelanggan />
            <ComponentFooter />
        </div>
    )
   } else if (TypeGame == "Mobile Legends") {
    return(
        <div>
            <CheckoutML />
            <DukunganPelanggan />
            <ComponentFooter />
        </div>
    )

   } else {
    return(
        <div className="text-center font-bold text-white mt-10 text-xl">Tunggu Sebentar...</div>
    )
   }
}