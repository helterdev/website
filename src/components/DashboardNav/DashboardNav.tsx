import { SlNote } from 'react-icons/sl';
import { TbBus } from 'react-icons/tb';
import { PiClockCountdown } from 'react-icons/pi';
import { FaPlusCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Dbuttons = [
  {
    label: 'Note',
    icon: <SlNote className='w-4 h-4 fill-[#2b283e]' />,
    id: 1,
  },
  {
    label: 'Shipping',
    icon: <TbBus className='w-4 h-4  stroke-[#2b283e]' />,
    id: 2,
  },
  {
    label: 'Hold Orders',
    icon: <PiClockCountdown className='w-4 h-4 fill-[#2b283e]' />,
    id: 3,
  },
  {
    label: 'New Item',
    icon: <FaPlusCircle className='w-4 h-4 fill-[#2b283e] ' />,
    id: 4,
  },
];

const DashboardNav = () => {
  return (
    <nav className='py-6 w-4/5 m-auto flex justify-between items-center sm:gap-14 lg:gap-0'>
      <div className='flex lg:w-[30%]'>
        <button type='button'>
          <RxHamburgerMenu className='w-6 h-6' />
        </button>
      </div>
      <ul className='hidden sm:flex sm:flex-1  sm:gap-3 lg:justify-end'>
        {Dbuttons.map((item) => (
          <li key={item.id}>
            <Button className='flex items-center gap-2  h-auto bg-[#8f8fe2] rounded hover:bg-[#6b60a2]'>
              {item.icon}
              <span className='text-sm font-medium text-[#2b283e]'>
                {item.label}
              </span>
            </Button>
          </li>
        ))}
      </ul>
      <div className='sm:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='outline-none bg-transparent border active:bg-slate-200'>
              <FaPlusCircle className='w-4 h-4 fill-black' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Dbuttons.map((item) => (
              <DropdownMenuItem key={item.id} className='gap-1'>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DashboardNav;
