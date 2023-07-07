

'use client';

import { Card } from 'flowbite-react';

export default function HorizontalCard() {
  return (
    <div>
    <Card className='m-9 h-20px rounded-xl'
      imgSrc="https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg"
    >
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium!</div>
    </Card>

    <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div>
          Noteworthy technology acquisitions 2021
        </div>
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <div>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </div>
      </div>
    </Card>

    </div>
  )
}


