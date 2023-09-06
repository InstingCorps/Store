'use client'


import CheckoutFF from "../freefire/components/FreeFireCheckout"
import React, { useState, useEffect } from 'react';
import CheckoutML from "../mobile-legends/components/Checkout";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/Callme";




export default function Checkout() {
    const [TypeGame , setTypeGame] = useState('')

    useEffect(() => {
        const getTypeGame = sessionStorage.getItem('TypeGame')

        if (getTypeGame) {
            setTypeGame(getTypeGame)}
    },[])
    
    return(
        <div>
            <CheckoutML />
            <DukunganPelanggan />
            <ComponentFooter />
        </div>
    )
}