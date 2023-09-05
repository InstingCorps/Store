import { NextResponse } from "next/server";
import axios from "axios";
import { hashData } from "@/app/services/data/dataToHash";
import { ref_id } from "@/app/services/data/ref_idGenerator";
import { config } from "dotenv";
import { DecryptAutomated } from "@/crypto/encrypt";
import { URLvalidation } from "@/app/validation/URLvalidation";
config();

export const POST = async (request : Request) => {

    const body = await request.json()
    const Data = body.data
    const Decrypt = DecryptAutomated(Data)

    const refID = ref_id();
    const hashing = await hashData(refID);
    const Verification = Decrypt.verify
    const CostumerData = Decrypt.id
    const skuCode = Decrypt.buyer_sku_code
    console.log(CostumerData , skuCode);

    const url = `${process.env.APP_URL_DIGIFLAZZ}/transaction`;
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: skuCode,
        customer_no: CostumerData,
        ref_id: refID,
        testing: true,
        sign: hashing
    };
    

    if (Verification === process.env.APP_VERIFICATION_ORDER) {
        try {
            const response = await axios.post(url, data);
            const resData = response.data.data;
            console.log(resData);
            return NextResponse.json(resData)
        } catch (error:any) {
            return { error: "error", message: error.message };
        }
    } else {
        return NextResponse.json("unauthorized!")
    }
}