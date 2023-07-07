

'use client';

  import React, { useState, useEffect } from 'react';
  import { Button } from 'flowbite-react';
  import Valid from './valid';

function ButtonPills(): JSX.Element {
  const [buttonValues, setButtonValues] = useState<string[]>([]);

  useEffect(() => {
    //  Valid(buttonValues)
    
  }, [buttonValues]);

  const handleClick = (value: string) => () => {
    setButtonValues([value]);
    localStorage.setItem('buttonValues', value);

  };

  const renderButtons = () => {
    const buttonData = [
      { value: '25 diamond', label: '25 diamond' },
      { value: '24 diamond', label: '24 diamond' },
      { value: '23 diamond', label: '23 diamond' },
      { value: '2 diamond', label: '2 diamond' },
      { value: '5 diamond', label: '5 diamond' },
      { value: '51 diamond', label: '51 diamond' },
      { value: 'Nilai Button 2', label: 'Button 2' },
      // ... tambahkan data button lainnya di sini
    ];

    return buttonData.map((button, index) => (
      <Button
      key={index}
      color="warning"
      pill
      href="/about"
      value={button.value}
      onClick={handleClick(button.value)}
      >
        {button.label}
      </Button>
    ));
  };

  return <div className="mt-10 grid grid-cols-3 md:grid-cols-8 gap-4 m-9"
  >{renderButtons()}</div>;
}

export default ButtonPills;


