'use client';

import { Card, Tabs } from 'flowbite-react';
import { FaGem , FaUserPlus } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';


export default function TabsWithIcons() {


  return (
    <Card className='m-4'>
    <Tabs.Group className="m-0 gap-1"
      aria-label="Tabs with icons"
      style="underline"
    >
      <Tabs.Item
        active
        icon={FaGem}
        title="Diamonds"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tabs associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        icon={FaUserPlus}
        title="WeeklyPass"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tabs associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        icon={AiOutlineCalendar}
        title="Event"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tabs associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        icon={BsThreeDots}
        title="Items Lainnya"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tabs associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
    </Tabs.Group>
    </Card>
  )
}


