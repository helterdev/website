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

import DashboardNav from '@/components/DashboardNav/DashboardNav';
import NavInput from '@/components/DashboardNav/NavInput/NavInput';

export default function Dashboard() {
  return (
    <main>
      <div>
        <DashboardNav />
        <section>
          <div className='w-4/5 m-auto bg-[#8f8fe2] rounded h-10'>
            <NavInput />
          </div>
          <div className='w-4/5 m-auto'>
            <Table>
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
                <TableRow>
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
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  );
}
