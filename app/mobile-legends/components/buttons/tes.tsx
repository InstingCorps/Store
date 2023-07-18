'use client' 
import React from "react"

export default function Test(value : any) {

        let toString
        const getPrice = sessionStorage.getItem('Price')
        
        if (getPrice !== null) {
            toString = parseFloat(getPrice);
          } else {
            toString = 0
          }

    const Prices = toString
    const Persen = value;
    const TotalPersen = (Prices * Persen) / 100;
    
    const result = Prices + TotalPersen
    const resultAsString = result.toString();
    sessionStorage.setItem('Payment' , resultAsString)
    console.log(resultAsString , "From tes");

}
