import { StatusBadge } from '../StatusBadge';
import { CardType } from '../../types/card.type';
import DEFAULT_IMAGE from '../../assets/default.png';

export function Card({ image = DEFAULT_IMAGE, title, description, status, type, icon }: CardType) {
  return (
    <div
      className='flex flex-col lg:flex-row justify-center content-center w-full h-full m-8 rounded-lg transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-600 bg-zinc-700 '>
      <div className='relative self-center lg:w-48 lg:h-full w-60 h-56'>
        <img src={image} alt={title} className='absolute object-cover w-full h-full rounded-t-lg lg:rounded-l-lg'
             loading='lazy' />
      </div>
      <div className='flex-auto self-center p-6'>
        <h1 className='flex-auto text-lg font-bold text-white'>
          {title}
        </h1>
        <StatusBadge status={status} type={type as string} />
        <div className='flex text-white items-center gap-1'>
          {icon ? icon : null}
          {description}
        </div>
      </div>
    </div>
  );
}
