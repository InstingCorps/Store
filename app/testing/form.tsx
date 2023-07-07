

'use client';

import { Card,TextInput } from 'flowbite-react';

export default function CardWithFormInputs() {
  return (
    <Card className='m-9'>
      <div>Buty</div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">

          <TextInput
            id="email1"
            placeholder="Game ID"
            required
            pattern='[0-9]*'
            type="text"
          />
          <TextInput
            id="email1"
            placeholder="   ( Zone ID )"
            required
            pattern='[0-9]*'
            type="text"
          />
        </div>

        <div>test</div>
      
    </Card>
  )
}


