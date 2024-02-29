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

import { FaHandHoldingDollar } from 'react-icons/fa6';

import DashboardNav from '@/components/Dashboard/DashboardNav';
import NavInput from '@/components/Dashboard/NavInput/NavInput';
import { Button } from '@/components/ui/button';
import ModalButton from '@/components/Dashboard/ModalButton/ModalButton';
import { useStateData } from '@/context/StateContext';

export default function Dashboard() {
  const { cartState, deletetoCart, updateQuantity, deleteQuantity } =
    useStateData();
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
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead></TableHead>
                    {/* <TableHead className='text-right'>Amount</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartState.cart.length > 0 ? (
                    cartState.cart.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <FiEdit className='flex w-4 h-4 hover:cursor-pointer' />
                        </TableCell>
                        <TableCell className='font-medium max-w-[300px] overflow-hidden box-border'>
                          {item.title}
                        </TableCell>
                        <TableCell>${item.price}</TableCell>
                        <TableCell className='flex gap-2 items-center'>
                          <button
                            className='text-sm bg-[#84919c] w-5 h-5
                             text-white rounded-full hover:bg-[]'
                            onClick={() => deleteQuantity(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className='text-sm bg-[#84919c] w-5 h-5 text-white rounded-full hover:bg-[#6a747c]'
                            onClick={() => updateQuantity(item.id)}
                          >
                            +
                          </button>
                        </TableCell>
                        <TableCell className='text-left'>
                          ${item.mount}
                        </TableCell>
                        <TableCell className='flex justify-end'>
                          <IoTrashOutline
                            className='w-[18px] h-[18px] text-[#eb5853] hover:cursor-pointer'
                            onClick={() => deletetoCart(item.id)}
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow></TableRow>
                  )}
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
                    <TableRow>
                      <TableCell className=' text-xs'>Sub Total</TableCell>
                      <TableCell className='text-end'>$100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className=' text-xs'>Tax</TableCell>
                      <TableCell className='text-end'>$100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='text-xs'>Shipping</TableCell>
                      <TableCell className='text-end'>$100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className=' text-xs text-[#4f85dd]'>
                        Discounton Cart
                      </TableCell>
                      <TableCell className='text-end'>$100</TableCell>
                    </TableRow>
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
              <ModalButton />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
