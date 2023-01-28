import { CardType } from '../../types/card.types';
import { StatusBadge } from '../StatusBadge';
import DEFAULT_IMAGE from '../../assets/default.png';

export function Card({ image = DEFAULT_IMAGE, title, description, status, type }: CardType) {
  return (
    <div className='flex flex-col lg:flex-row justify-center content-center w-full h-full m-8 rounded-lg bg-zinc-700'>
      <div className='relative self-center lg:w-48 lg:h-full lg:pt-0 w-24 h-24 pt-4'>
        <img src={image} alt={title} className='absolute object-cover w-full h-full rounded-full lg:rounded-none'
             loading='lazy' />
      </div>
      <div className='flex-auto self-center p-6'>
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
