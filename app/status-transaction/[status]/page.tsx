'use client'
import { URLvalidation } from "@/app/validation/URLvalidation";
import { DecryptAutomated } from "@/encrypt/encrypt";
import axios from "axios";
import { Button } from "flowbite-react";


const StatusTransaction = ({params} : {params: {status: string}}) => {
  const response = params.status
  const data = response.replace(/%3A/g, ':');
  const decrpyt = DecryptAutomated(data)
  
      // console.log(decrpyt);
      
  try {

    const verify = decrpyt.verify
    if (URLvalidation(verify)) {
      return (
        <div>
        <div className="text-center font-bold text-white mt-20">OK PESANAN AKAN SEGERA DI PROSES!</div>
        <Button href={"/"}>HOME</Button>
        </div>

      )
    } else {
      return (
          <div className="text-center font-bold text-white mt-20">VALIDASI GAGAL</div>
      )
  }
  } catch (error) {
    return (
      <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
  )
  }
}

export default StatusTransaction
