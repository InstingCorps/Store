

'use client';

  import React, { useState, useEffect } from 'react';
  import { Button } from 'flowbite-react';
  import DataMobileLegends from '@/data/mobile-legends/values/values';

function ButtonPills(): JSX.Element {
  const [buttonValues, setButtonValues] = useState<string[]>([]);

  useEffect(() => {
  }, [buttonValues]);

  const handleClick = (value: string , Price : any) => () => {
    setButtonValues([value]);
    sessionStorage.setItem('buttonValues', value);
    sessionStorage.setItem('Price', Price);

  };

  const renderButtons = () => {
    const buttonData = DataMobileLegends

    return buttonData.map((button, index) => (
      <Button
      key={index}
      color="warning"
      pill
      href="/about"
      value={button.value}
      onClick={handleClick(button.value , button.price)}
      >
        {button.label}
      </Button>
    ));
  };

  return <div className="mt-10 grid grid-cols-3 md:grid-cols-8 gap-2 m-5"
  >{renderButtons()}</div>;
}

export default ButtonPills;


