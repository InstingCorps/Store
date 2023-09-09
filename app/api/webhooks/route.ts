
import nodemailer from 'nodemailer';
import crypto from "crypto"

export const POST = async (request :Request) => {
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

    // console.log(checksum);

    // console.log(signature);
    // console.log(response);
    
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
      } else {
        console.log('Signature does not match');
      }
}