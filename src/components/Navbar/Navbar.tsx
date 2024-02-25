import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className=' bg-slate-950'>
      <nav className='flex py-4 w-4/5 m-auto justify-end gap-4 text-white'>
        <Button variant={'ghost'} asChild>
          <Link href={'/dashboard'}>Dashboard</Link>
        </Button>
        <Button variant={'ghost'} asChild>
          <Link href={'/products'}>Products</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
