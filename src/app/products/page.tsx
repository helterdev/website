'use client';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import { CiMenuKebab } from 'react-icons/ci';
import { buttons } from '@/constant/nameButton';
import { getProducts } from '@/api/api';
import Search from '@/components/Search/Search';
import Card from '@/components/Card/Card';
import SkeletonCard from '@/components/Skeleton/Skeleton';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useStateData } from '@/context/StateContext';

const Products = () => {
  const { state: data, setData } = useStateData();
  const [isLoading, setIsLoading] = useState(true);
  const skeleton = new Array(20).fill(null);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const products = async () => {
      const response = await getProducts(signal);
      if (response) {
        setIsLoading(false);
        setData(response);
      }
    };
    products();

    return () => abort.abort();
  }, [setData]);

  return (
    <div>
      <Toaster />
      <div className='bg-gray-300'>
        <Search />
        <section className='py-4  '>
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
            {/* <Sidebar
              side={'right'}
              element={<CiMenuKebab className='w-6 h-6 hover:cursor-pointer' />}
            /> */}
          </div>

          {isLoading ? (
            <>
              <h3 className='py-4 text-center font-light'>Loading...</h3>
              <ul className='py-8 grid justify-center flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {skeleton.map((_, index) => (
                  <li
                    key={index}
                    className='inline-flex justify-center xl:justify-center'
                  >
                    <SkeletonCard />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className='py-8 grid justify-center flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {data?.map((item) => (
                <li
                  key={item.id}
                  className='inline-flex justify-center xl:justify-center'
                >
                  <Card
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    id={item.id}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
