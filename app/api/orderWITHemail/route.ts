

import { Decrypt, Encrypt } from '@/crypto/encrypt';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST (request : Request) {

  const {id  , name} = await request.json()

  const data: any = {
    name: 'fahrur',
    umur: 24,
    hobi: 'main bola',
  };

  const encryptionKey = 'fahrurrozi25012006Rozistore25126'
  

  const encrypt = Encrypt(data , encryptionKey)
  const decryptedData = Decrypt(encrypt, encryptionKey);
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'games25legends@gmail.com',
      pass: 'ermwseyrpyivteww',
    },
  });

  const orderId = '123';

  const confirmOrderLink = `https://example.com/order/${orderId}/confirm`;
  const declineOrderLink = `https://example.com/order/${orderId}/decline`;

  const emailContent = `
  <p>Hello,</p>
  <p>Please take action on the order:</p>
  <p>With Order:</p>
  <p>ID : ${id}</p>
  <p>Zone ID :( ${encrypt} )</p>
  <p>Decrypted Data: ${JSON.stringify(decryptedData)}</p>
  <p>Nama : ${decryptedData.name}</p>
  
  <a href="${confirmOrderLink}">
    <button style="background-color: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
      Accept
    </button>
  </a>
  <span style="display: inline-block; width: 10px;"></span>
  <a href="${declineOrderLink}">
    <button style="background-color: #dc3545; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
      Decline
    </button>
  </a>
`;

  const mailOptions = {
    from: 'rozistoreemail@gmail.com',
    to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
    subject: "Testing...",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
  return NextResponse.json("Email Has been sent!")

}