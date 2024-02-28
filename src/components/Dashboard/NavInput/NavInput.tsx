import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CgProfile } from 'react-icons/cg';
import { FaPlusCircle } from 'react-icons/fa';

const NavInput = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full h-full flex justify-between bg-inherit items-center hover:bg-[#6b60a2]'>
          <div className='flex gap-1 items-center'>
            <CgProfile className='w-4 h-4 text-[#2b283e]' />
            <span className='text-xs text-[#2b283e]'>Steve Jobs</span>
          </div>
          <FaPlusCircle className='w-4 h-4 ' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>Add New Customer</DialogTitle>
        </DialogHeader>

        <form action='' className='px-12 pt-12'>
          <div className='h-8 my-4'>
            <input
              type='text'
              placeholder='Name'
              className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
            />
          </div>
          <div className='h-8 my-4'>
            <input
              type='email'
              placeholder='Email'
              className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
            />
          </div>
          <div className='h-8 my-4'>
            <input
              type='phone'
              placeholder='Phone'
              className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
            />
          </div>
          <div className='h-8 my-4'>
            <input
              type='number'
              placeholder='Currency'
              className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
            />
          </div>
          <div className='h-8 my-4'>
            <input
              type='text'
              placeholder='TAX ID'
              className='w-full h-full box-border pr-4 font-light text-sm outline-none border-b focus:border-b-blue-400'
            />
          </div>
          <div className='h-8 my-4'>
            <span className='text-[#3674d9] font-normal text-xs'>
              + Add More Details
            </span>
          </div>
          <div className='my-4'>
            <Button
              type='button'
              className='rounded bg-[#3674d9] w-full py-6 font-normal hover:bg-[#2b4fa2]'
            >
              Update
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NavInput;
