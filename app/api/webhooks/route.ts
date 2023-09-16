
import nodemailer from 'nodemailer';
import crypto from "crypto"
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';


let responseData1: Object = Object;

  // https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
  function iteratorToStream(iterator: any) {
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next()
   
        if (done) {
          controller.close()
        } else {
          controller.enqueue(value)
        }
      },
    })
  }
  const encoder = new TextEncoder()
   
  
  
  function sleep(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }
  
  async function* makeIterator() {
      while (Object.keys(responseData1).length === 0) {
      await sleep(5000);
    }
    yield encoder.encode(JSON.stringify(responseData1))
    // if (responseData1 !== 'data') {
      setTimeout(() => {
        responseData1 = {};  // Mengubah responseData1 menjadi 'data' setelah 5 detik
      }, 20000);
    // }
    
  }

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
          responseData1 = {
            message: 'Signature matched',
            data: parse,
          };
          await transporter.sendMail(mailOptions);
          const responseData = {
            message: 'Signature matched',
            data: parse,
          };
          
      
          return NextResponse.json(responseData);
      } else {
        responseData1 = {
          message: 'Signature not matched',
          data: null,
        };
        console.log('Signature does not match');
        const responseData = {
          message: 'Signature does not matched',
          data: null,
        };
        return NextResponse.json(responseData);
      }
  }
 

export async function GET () {
  
  const Content = makeIterator();
  const stream = iteratorToStream(Content);
  return new Response(stream);
}
