
'use client'

// function Valid(props:any) {
//     console.log("Valid",props);
    
//     return(
//         <div>{props[0]} hallo
//         </div>
//     )
// }

// export default Valid;

import React, { useState, useEffect } from 'react';

const Valid = (): JSX.Element => {
  const [buttonValue, setButtonValue] = useState('');

  useEffect(() => {
    const storedButtonValue = localStorage.getItem('buttonValues');
    if (storedButtonValue) {
      setButtonValue(storedButtonValue);
    }
  }, []);
  console.log(buttonValue);
  
  if (buttonValue == '2 diamond') {
    console.log("Benar");
    
    
  }

  return <div className='font-bold text-center text-white'>{buttonValue}</div>;
};

export default Valid;


