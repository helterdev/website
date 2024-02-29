import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsCashCoin } from 'react-icons/bs';
import { CiCreditCard1 } from 'react-icons/ci';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { FaHandHoldingDollar } from 'react-icons/fa6';

const ModalButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type='button'
          className='flex flex-1 gap-2 items-center bg-[#e1eaf9] text-[#3674d9]'
        >
          <GiReceiveMoney fill='#3674d9' />
          Pay Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='my-4 py-4 bg-[#f8f9fb] rounded flex px-4 items-center justify-between'>
            <span className='font-light text-sm'>Order Amounth</span>
            <span>$5005.05</span>
          </DialogTitle>
          <div className='rounded border flex lg:min-h-[500px]'>
            <div className='w-1/4 h-full flex flex-col pt-4 text-[#637381] border-r '>
              <span className='flex items-center  py-3 text-xs sm:gap-1 sm:pl-1'>
                <BsCashCoin /> Cash
              </span>
              <span className='flex items-center  py-3 text-xs bg-[#eef0f9] text-[#5c6ac4] sm:gap-1 sm:pl-1'>
                <CiCreditCard1 color='#5c6ac4' /> Card
              </span>
              <span className='flex items-center  py-3 text-xs sm:gap-1 sm:pl-1'>
                <RiAccountCircleLine /> On Account
              </span>
              <span className='flex items-center  py-3 text-xs sm:gap-1 sm:pl-1'>
                <CiCreditCard1 /> Checque
              </span>
            </div>
            <form
              action=''
              className='flex-1 box-border sm:p-4 lg:flex lg:flex-col lg:justify-between'
            >
              <div>
                <div className='h-8 my-4'>
                  <input
                    type='text'
                    placeholder='Card Name'
                    className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
                  />
                </div>
                <div className='h-8 my-4'>
                  <input
                    type='number'
                    placeholder='Card Number'
                    className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
                  />
                </div>
                <div className='h-8 my-4'>
                  <input
                    type='date'
                    placeholder='Card Expires Day'
                    className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
                  />
                </div>
                <div className='h-8 my-4'>
                  <input
                    type='number'
                    placeholder='Card Screet'
                    className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
                  />
                </div>
              </div>
              <div className='mt-4 flex flex-col gap-1 box-border sm:flex-row'>
                <Button
                  type='button'
                  className='rounded bg-[#fadedd] text-[#e55c57] order-2 font-normal flex items-center gap-3 sm:order-1'
                >
                  <MdOutlineCancel fill='#e55c57' />
                  Cancel
                </Button>
                <Button
                  type='button'
                  className='rounded bg-[#3674d9] order-1 font-normal flex items-center gap-3 flex-1 sm:order-2'
                >
                  <FaHandHoldingDollar />
                  Complete Payment
                </Button>
              </div>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalButton;
