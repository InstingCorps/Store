'use client'
import Checkout from "@/app/checkout/checkouts/Checkout";
import { URLvalidation } from "@/app/validation/URLvalidation";
import ComponentFooter from "@/components/footer/footer";
import DukunganPelanggan from "@/Contact/Callme";
import { DecryptAutomated } from "@/crypto/encrypt";
import React, {useState , useEffect} from 'react'


const EncryptedData = ({params} : {params: {encryptedData: string}}) => {
    const [TypeGame , setTypeGame] = useState('')
useEffect(() => {
  if (typeof window !== 'undefined') {
    const getTypeGame = sessionStorage.getItem('TypeGame')
    if (getTypeGame) {
        setTypeGame(getTypeGame)}
  }
  },[])

    const response = params.encryptedData
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)
  try {
    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
      if (TypeGame !== "" || null) {
        return (
          <div>
              <Checkout />
              <DukunganPelanggan />
              <ComponentFooter />
          </div>
      )
      } else {
        return (
          <div>PASTIKAN LANGKAH ANDA BENAR!</div>
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
