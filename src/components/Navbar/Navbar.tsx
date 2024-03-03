'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useStateData } from '@/context/StateContext';

const Navbar = () => {
  const { cartState } = useStateData();

  return (
    <header className='sticky top-0 bg-slate-500 z-10'>
      <nav className='flex py-4 w-4/5 m-auto justify-end gap-4 text-white'>
        <Button variant={'ghost'} className='bg-slate-700 relative' asChild>
          <Link href={'/dashboard'}>
            Dashboard
            {cartState.count > 0 ? (
              <span className='absolute top-[-10px] right-[-10px] bg-orange-500 rounded-full py-[2px] px-[8px]'>
                {cartState.count}
              </span>
            ) : null}
          </Link>
        </Button>
        <Button variant={'ghost'} className='bg-slate-700' asChild>
          <Link href={'/products'}>Products</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
