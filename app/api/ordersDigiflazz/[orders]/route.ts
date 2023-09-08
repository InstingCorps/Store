import { NextResponse } from "next/server";
import axios from "axios";
import { hashData } from "@/app/services/data/dataToHash";
import { ref_id } from "@/app/services/data/ref_idGenerator";
import { config } from "dotenv";
import { DecryptAutomated } from "@/crypto/encrypt";
import nodemailer from 'nodemailer';

config();

export const POST = async (request : Request) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:'games25legends@gmail.com',
          pass: 'ermwseyrpyivteww',
        },
      });


    const body = await request.json()
    const Data = body.data
    const Decrypt = DecryptAutomated(Data)

    const refID = ref_id();
    const hashing = await hashData(refID);
    const Verification = Decrypt.verify
    const CostumerData = Decrypt.id
    const skuCode = Decrypt.buyer_sku_code

    const url = `${process.env.APP_URL_DIGIFLAZZ}/transaction`;
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: skuCode,
        customer_no: CostumerData,
        ref_id: refID,
        // testing: true,
        sign: hashing
    };


    if (Verification === process.env.APP_VERIFICATION_ORDER) {
        let hasil = null;
        try {
            const response = await axios.post(url, data);
            const resData = response.data.data;
            const datas = `
            <p>ACCEPTED Data: ${JSON.stringify(resData)}</p>
            <p>ACCEPTED Data: ${resData.status}</p>
            <p>ACCEPTED Data: ${resData.buyer_last_saldo}</p>
            
            `
            const mailOptions = {
                from: 'rozistoreemail@gmail.com',
                to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
                subject: "ORDER ACCEPTED!",
                html: datas,
              };
              await transporter.sendMail(mailOptions);
            return NextResponse.json(resData)
        } catch (error:any) {
            hasil = error.response.data
            const datas = `<p>ERROR Data: ${JSON.stringify(hasil)}</p>`
            const mailOptions = {
                from: 'rozistoreemail@gmail.com',
                to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
                subject: "ERROR REPORT!",
                html: datas,
              };
            if (hasil !== null) {
                await transporter.sendMail(mailOptions);
            }
            return { error: "error"};
        }
    } else {
        return NextResponse.json("unauthorized!")
    }
}