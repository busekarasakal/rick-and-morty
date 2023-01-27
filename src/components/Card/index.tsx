import { CardType } from '../../types/card.types';
import { StatusBadge } from '../StatusBadge';

export function Card({ image, title, description, status, type }: CardType) {
  return (
    <div className='flex rounded-lg bg-zinc-700 w-full h-full flex-col lg:flex-row justify-center content-center m-8'>
      <div className='lg:w-48 lg:h-full lg:pt-0 w-24 h-24 relative self-center pt-4'>
        <img src={image} alt={title} className='absolute w-full h-full object-cover rounded-full lg:rounded-none'
             loading='lazy' />
      </div>
      <div className='flex-auto p-6 self-center'>
        <h1 className='flex-auto text-lg font-bold text-white hover:text-amber-500'>
          {title}
        </h1>
        <StatusBadge status={status} type={type} />
        <div className='flex text-white'>
          {description}
        </div>
      </div>
    </div>
  );
}
