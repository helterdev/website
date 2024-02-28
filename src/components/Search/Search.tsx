import { IoSearchOutline } from 'react-icons/io5';
import { MdQrCodeScanner } from 'react-icons/md';
const Search = () => {
  return (
    <nav className='h-12 relative w-4/5 m-auto border-b'>
      <IoSearchOutline className='absolute w-6 h-6 left-4 top-1/2 transform translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer' />
      <input
        className='flex w-full h-full bg-transparent outline-none px-8'
        type='text'
        placeholder='Search...'
      />
      <MdQrCodeScanner className='w-6 h-6 absolute top-1/2 transform translate-x-[-50%] translate-y-[-50%] right-4 hover:cursor-pointer' />
    </nav>
  );
};

export default Search;
