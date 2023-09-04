'use client'
import CheckoutFF from "@/app/freefire/components/FreeFireCheckout";
import CheckoutML from "@/app/mobile-legends/components/CheckoutML";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/Callme";
import React, {useState , useEffect} from 'react'


const EncryptedData = ({params} : {params: {encryptedData: string}}) => {
    const response = params.encryptedData
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
  return (
      <div>
          <CheckoutML />
          <DukunganPelanggan />
          <ComponentFooter />
          <div>
    </div>
      </div>
  )

 } else {
  return (
      <div className="text-center font-bold text-white mt-10 text-xl">Ada yang salah 😁 silahkan ulangi lagi proses nya dari awal ya <a className="bg-white text-center text-black" href="/">Ulangi Topup</a></div>
  )
 }

}

export default EncryptedData
