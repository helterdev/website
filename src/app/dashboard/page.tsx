'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FiEdit } from 'react-icons/fi';
import { IoTrashOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegHandRock } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaHandHoldingDollar } from 'react-icons/fa6';

import DashboardNav from '@/components/Dashboard/DashboardNav';
import NavInput from '@/components/Dashboard/NavInput/NavInput';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const rows = new Array(9).fill(null);
  const row2 = new Array(4).fill(null);
  return (
    <main>
      <div>
        <DashboardNav />
        <section>
          <div className='w-4/5 m-auto bg-[#8f8fe2] rounded h-10'>
            <NavInput />
          </div>
          <div className='w-4/5 m-auto'>
            <div className='max-h-[596.5px] overflow-auto'>
              <Table className='h-full'>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    {/* <TableHead className='w-[100px]'>Invoice</TableHead> */}
                    <TableHead></TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead></TableHead>
                    {/* <TableHead className='text-right'>Amount</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((_, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <FiEdit className='flex w-4 h-4 hover:cursor-pointer' />
                      </TableCell>
                      <TableCell className='font-medium'>INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell className='flex gap-2 items-center'>
                        <button
                          className='text-sm bg-[#84919c] w-5 h-5
                     text-white rounded-full hover:bg-[]'
                        >
                          -
                        </button>
                        <span>1</span>
                        <button className='text-sm bg-[#84919c] w-5 h-5 text-white rounded-full hover:bg-[#6a747c]'>
                          +
                        </button>
                      </TableCell>
                      <TableCell className='text-left'>$250.00</TableCell>
                      <TableCell className='flex justify-end'>
                        <IoTrashOutline className='w-[18px] h-[18px] text-[#eb5853] hover:cursor-pointer' />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className='flex justify-end'>
              <div className='w-1/2'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {row2.map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>Paid</TableCell>
                        <TableCell className='text-end'>$100</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className='flex bg-[#e1eaf9] py-4 justify-between px-2 text-[#3674d9] rounded'>
              <span className='flex-1 text-xs flex items-center'>
                Products Count 13
              </span>
              <div className='flex-1 flex justify-between items-center font-medium text-base'>
                <span>Total</span>
                <span>$5005.50</span>
              </div>
            </div>
            <div className='my-2 flex gap-2 flex-wrap'>
              <Button className='flex flex-1 gap-2 items-center bg-[#fadedd] text-[#e55c57]'>
                <MdOutlineCancel fill='#e55c57' />
                Cancel
              </Button>
              <Button className='flex flex-1 gap-2 items-center bg-[#dee1f3] text-[#5c6ac4]'>
                <FaRegHandRock fill='#5c6ac4' />
                Hold
              </Button>
              <Button className='flex flex-1 gap-2 items-center bg-[#dee1f3] text-[#5c6ac4]'>
                <FaHandHoldingDollar fill='#5c6ac4' />
                Discount
              </Button>
              <Button className='flex flex-1 gap-2 items-center bg-[#e1eaf9] text-[#3674d9]'>
                <GiReceiveMoney fill='#3674d9' />
                Pay Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
