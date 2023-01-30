import { HeaderType } from '../../types/header.type';

export function Header({ title }: HeaderType) {
  return (
    <h1 className='flex justify-start mx-12 mt-6 font-semibold text-white text-3xl'>{title}</h1>
  );
}