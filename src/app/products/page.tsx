'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CiMenuKebab } from 'react-icons/ci';
import { buttons } from '@/constant/nameButton';
import { getProducts } from '@/api/api';
import { Catalogo } from '@/types/apiproducts';
import Search from '@/components/Search/Search';

type StateData = Catalogo[];

export default function Products() {
  const [data, setData] = useState<StateData | null>(null);
  console.log(data);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const products = async () => {
      const response = await getProducts(signal);
      if (response) {
        setData(response);
      }
    };
    products();

    return () => abort.abort();
  }, []);

  return (
    <main>
      <div>
        <Search />
        <section className='py-4 bg-gray-300 '>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            {buttons.map((item) => (
              <Button
                type='button'
                className='h-10 w-[140px] font-normal border-gray-500  rounded text-gray-500 active:border-blue-500 active:text-blue-500'
                variant={'outline'}
                key={item.id}
              >
                {item.label}
              </Button>
            ))}
            <CiMenuKebab className='w-6 h-6 hover:cursor-pointer' />
          </div>
        </section>
      </div>
    </main>
  );
}
