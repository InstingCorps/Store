

'use client'
// export default function Test(){
//     return(
//         <div>
//             <div className="text-orange-500">Game Populer</div>
//             <div  className="text-2xl ml-3 md:text-4xl md:ml-8 font-bold text-white">Trending Sekarang</div>
            
//         </div>
//     )
// }

import React from 'react';
import './styles.css';
import { Alert } from "flowbite-react";

function Development() {
  return (
    <div>
      <div>Navbar</div>
    <Alert className='text-container mt-14'>
      <div className="marquee font-bold">
        <span className='text-gray-900'>Website Ini Masih Dalam Prosess Pengembangan Mohon Untuk Kerjasama Nya Jika Anda Menemukan Bug Atau Error Silahkan Hubungi Admin @FahrurRozi Atau Admin Lainnya! Selamat Berbelanja! 👌👍</span>
      </div>
    </Alert>

    </div>
  );
}

export default Development;
