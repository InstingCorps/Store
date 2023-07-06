

'use client';

import { Carousel } from 'flowbite-react';

export default function SlideChangeEvent() {
  return (
    <Carousel onSlideChange={slideIdx=>console.log(slideIdx)}>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://webtopup-3.vercel.app/img/1204924.jpg" alt="" />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel>
  )
}


