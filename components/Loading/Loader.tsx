import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading className="text-4xl animate-spin" />
    </div>
  );
};

export default Loader;
