import { LayoutType, NavbarTypes } from '../../types/layout.type';

function NavbarItem({ isSelected, text, path }: NavbarTypes) {
  return (
    <li className='hover:cursor-pointer'>
      <a
        href={path}
        className={`flex flex-col lg:flex-row items-start p-0.5 ${
          isSelected ? 'text-base' : 'text-gray-500'
        } hover:text-base hover:text-gray-700 hover:font-bold`}
      >
        <span className='font-semibold'>{text}</span>
      </a>
    </li>
  );
}

export function Layout({ children }: LayoutType) {
  const path = window.location.pathname;

  return (
    <div className='flex flex-row lg:flex-col bg-zinc-800'>
      <div
        className='flex flex-col lg:flex-row w-32 lg:h-32 lg:w-full lg:fixed lg:top-0 lg:z-50 bg-stone-300 overflow-hidden border-r-[1px] border-solid border-gray-200'>
        <div className='flex justify-center items-center h-28 lg:w-64 mb-4 bg-base'>
          <h1 className='fixed font-bold text-l lg:text-5xl text-lime-500'>RICKORTY</h1>
        </div>
        <ul
          className='flex flex-col lg:flex-row lg:justify-end lg:items-center lg:w-full fixed top-0 z-50 py-32 lg:py-9 lg:px-4 gap-6'>
          <NavbarItem text='Home' path='/' isSelected={path === '/'} />
          <NavbarItem text='About' path='/#' isSelected={path === '/location'} />
          <NavbarItem text='Contact' path='/#' isSelected={path === '/episode'} />
        </ul>
      </div>
      <div className='min-h-screen lg:min-w-screen w-full lg:h-full items-center lg:pt-32'>
        {children}
      </div>
    </div>

  );
}