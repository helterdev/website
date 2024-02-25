import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[254px] w-[190px] rounded-xl flex flex-col justify-end gap-4 pb-8'></Skeleton>
    </div>
  );
};

export default SkeletonCard;
