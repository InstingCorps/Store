import { NextResponse } from "next/server";
import axios from "axios";
import { hashData } from "@/app/services/data/dataToHash";
import { ref_id } from "@/app/services/data/ref_idGenerator";
import { config } from "dotenv";
import { DecryptAutomated } from "@/encrypt/encrypt";
import nodemailer from 'nodemailer';
import Transaction from "../../database/models/transaction";

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
    const transactionID = Decrypt.transactionID

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
            const transaction = await Transaction.findOne({ transaction_id: transactionID });

            if (transaction) {
                // Tambahkan ref_id ke dokumen tersebut
                transaction.ref_id = resData.ref_id;
                transaction.status = resData.status;
                transaction.message = resData.message;
                transaction.sn = resData.sn;
                
                // Simpan perubahan dokumen ke dalam database
                await transaction.save();
                console.log('ref_id berhasil ditambahkan.');
              } else {
                console.log('Dokumen dengan transaction_id yang diberikan tidak ditemukan.');
              }


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