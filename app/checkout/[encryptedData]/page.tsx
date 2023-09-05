'use client'
import CheckoutFF from "@/app/freefire/components/FreeFireCheckout";
import CheckoutML from "@/app/mobile-legends/components/CheckoutML";
import { URLvalidation } from "@/app/validation/URLvalidation";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/Callme";
import { DecryptAutomated } from "@/crypto/encrypt";
import React, {useState , useEffect} from 'react'


const EncryptedData = ({params} : {params: {encryptedData: string}}) => {
    const [TypeGame , setTypeGame] = useState('')
useEffect(() => {
    const getTypeGame = sessionStorage.getItem('TypeGame')
  
    if (getTypeGame) {
        setTypeGame(getTypeGame)}
  },[])

    const response = params.encryptedData
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)
  try {
    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
        console.log("OK!");
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
              <div className="text-center font-bold text-white mt-10 text-xl">TUNGGU SEBENTAR...<br />Ada yang salah 😁 silahkan ulangi lagi proses nya dari awal ya <a className="bg-white text-center text-black" href="/">Ulangi Topup</a></div>
            )
            }
        
    } else {
        return (
            <div>VALIDASI GAGAL</div>
        )
        
    }

  } catch (error) {
    return (
        <div>ERROR URL TIDAK VALID</div>
    )
  }


}

export default EncryptedData
