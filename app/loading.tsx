import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
  return (
<div className="bg-white h-screen flex flex-col justify-center items-center">
  <div className="font-bold mb-5">Tunggu Sebentar...</div>
  <AiOutlineLoading className="h-12 w-12 animate-spin" />
</div>

  )
}

export default Loading
