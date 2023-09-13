
import nodemailer from 'nodemailer';
import crypto from "crypto"
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (request : NextRequest , res: NextResponse ) => {
    const secret = '8dd7478ce304558f';
    const response = await request.json()
    const post_data = JSON.stringify(response);
    const signature = request.headers.get('x-hub-signature') || '';


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:'games25legends@gmail.com',
        pass: 'ermwseyrpyivteww',
      },
    });

    const hmac = crypto.createHmac('sha1', secret);
    const digest = Buffer.from('sha1=' + hmac.update(post_data).digest('hex'), 'utf8');

    const checksum = Buffer.from(signature, 'utf8');

    const data = {
      message: 'Hello, SSE!',
      timestamp: new Date().toISOString(),
    };

    const newHeaders = new Headers(request.headers)

    newHeaders.set('Content-Type', 'text/event-stream')
    newHeaders.set('Cache-Control', 'no-cache')
    newHeaders.set('Connection', 'keep-alive')

    const sendEvent = () => {
      console.log("OK!");
      return NextResponse.next({
        request: {
          headers: newHeaders
        }
      })
    };

    console.log(checksum);
    console.log(signature);
    console.log(response);
    
    if ((digest.length === checksum.length && crypto.timingSafeEqual(digest, checksum))) {
        console.log('Signature matched');
        console.log(JSON.parse(post_data));
        const parse = JSON.parse(post_data);
        const datas = `
        <p>ACCEPTED Data: ${parse}</p>
        <p>ACCEPTED Data: ${parse.data.status}</p>
        <p>ACCEPTED Data: ${parse.data.message}</p>
        <p>ACCEPTED Data: ${parse.data.status}</p>
        <p>ACCEPTED Data: ${parse.data.tele}</p>
        <p>ACCEPTED Data: ${JSON.stringify(response)}</p>
        <p>ACCEPTED Data: ${JSON.stringify(post_data)}</p>
        <p>ACCEPTED Data: ${JSON.stringify(parse)}</p>
        `
        const mailOptions = {
            from: 'rozistoreemail@gmail.com',
            to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
            subject: "ORDER WEBHOOKS!",
            html: datas,
          };
          await transporter.sendMail(mailOptions);
          const responseData = {
            message: 'Signature matched',
            data: parse,
          };
      
          return NextResponse.json(responseData);
      } else {
      sendEvent();
        console.log('Signature does not match');
        const responseData = {
          message: 'Signature does not matched',
          data: null,
        };
        return NextResponse.json(responseData);
      }
  }


  // export const GET = (request: NextRequest) => {
  //   const newHeaders = new Headers(request.headers)

  
  //   const generaterandomData = () => {
  //     Math.floor(Math.random() * 100)
  //   }

  //   newHeaders.set('Content-Type', 'text/event-stream')
  //   newHeaders.set('Cache-Control', 'no-cache')
  //   newHeaders.set('Connection', 'keep-alive')

  //   const res = new NextResponse('', {
  //     status: 200,
  //     headers: newHeaders
  //   })

    
  //   const sendData = (res: NextResponse) => {

  //   const data = generaterandomData()
      
  //     NextResponse.rewrite(`data: ${data}\n\n`)
  //   }
    
  //   const intervalId = setInterval(() => {
  //     sendData(res);
  //   }, 1000);
  //     // return NextResponse.json("OK", {
  //     //   headers: newHeaders
  //     // })
  // }