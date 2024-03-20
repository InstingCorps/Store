'use client'

import { Card , Avatar } from "flowbite-react"
import { FaHeadset } from 'react-icons/fa'

export default function DukunganPelanggan() {
    const WAClick = () => {
        window.location.href = "http://wa.me/6288221574494?";
    }
    const TeleClick = () => {
        window.location.href = "https://t.me/FahrurRoziNA";
    }
    const EmailClick = () => {
        window.location.href = "mailto:rozistoreemail@email.com";
    }

    return(
    <div className="mt-10 bg-color-accent rounded">
           <div className="text-xl text-center font-serif font-bold">Dukungan Pelanggan</div>
            <div className="text-2xl font-extrabold text-white text-center">Hubungi Kami</div>
        <Card className="text-black bg-white">
            <div className="flex gap-2">
                <FaHeadset size={20} color="gray"/>
                <span className="text-sm font-bold">Layanan Pelanggan 24/7</span>
            </div>
            <div className="text-sm">Terkait pertanyaan atau masalah apa pun yang Anda miliki, kami di sini untuk membantu Anda dengan solusi terbaik dan layanan yang ramah serta responsif 24/7.</div>
            <div className="font-bold text-center">Hubungi Kami Melalui:</div>
            <div className="flex justify-center items-center gap-8">
            <Avatar img="https://e7.pngegg.com/pngimages/881/200/png-clipart-mailing-envelope-logo-email-marketing-computer-icons-email-miscellaneous-web-design.png" rounded bordered color="success" onClick={EmailClick}/>
            <Avatar img="/assets/logoItems/whatsappLOGORS.png" rounded bordered color="success" onClick={WAClick}/>
            <Avatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" rounded bordered color="success" onClick={TeleClick}/>
            </div>

            {/* <Button className="font-bold bg-color-secondary" href={Link}>Hubungi Kami</Button> */}
        </Card>
    </div>
    )
}