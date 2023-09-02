import { NextResponse } from "next/server";
import axios from "axios";
import { hashData } from "@/app/services/data/dataToHash";
import { ref_id } from "@/app/services/data/ref_idGenerator";
import { config } from "dotenv";
config();

export const POST = async (request : Request) => {

    const body = await request.json()
    console.log(body);
    const refID = ref_id();
    const hashing = await hashData(refID);

    const url = `${process.env.APP_URL_DIGIFLAZZ}/transaction`;
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: body.skuCode,
        customer_no: body.customer,
        ref_id: refID,
        testing: true,
        sign: hashing
    };

    try {
        const response = await axios.post(url, data);
        const resData = response.data.data;
        console.log(resData);
        // return resData;
        return NextResponse.json(resData)
    } catch (error:any) {
        return { error: "error", message: error.message };
    }
}