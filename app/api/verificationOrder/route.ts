

import { NextResponse } from 'next/server';
import { updateExpirationTime } from '../database/models/updateTime';
import { Validate } from '@/components/validation/URLvalidation';
import { EncryptAutomated } from '@/encrypt/encrypt';
import axios from 'axios';


export async function POST (request : Request) {

  const { transactionID , id , product_name , category , brand , price , seller_name , buyer_sku_code , seller_price} = await request.json();


  const dataEncrypt: any = {
    verify: Validate,
    id,
    brand,
    price,
    TRXID: transactionID,
    items: product_name,
  }

  const encrypt = EncryptAutomated(dataEncrypt)

  const responseXendit = await axios.post("https://rozistorebe.tokorozy.my.id/createInvoicesXendit" , {
    data: encrypt
  })

  await updateExpirationTime(transactionID , id , product_name , category , brand , price , seller_price);
  return NextResponse.json(responseXendit.data.url)

}