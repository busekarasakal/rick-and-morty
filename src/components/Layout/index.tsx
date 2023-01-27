import { LayoutTypes, NavbarTypes } from '../../types/layout.types';

function NavbarItem({isSelected, text, icon}: NavbarTypes) {
  return (
    <li className="hover:cursor-pointer">
      <a
        href="#"
        className={`flex flex-col lg:flex-row items-center h-12 transform ${
          isSelected ? 'text-base' : 'text-gray-500'
        } hover:text-base hover:text-lime-600 hover:font-bold`}
      >
        <span
          className={`inline-flex items-center justify-center h-12 w-12 text-lg text-2xl ${
            isSelected ? 'text-base' : 'text-gray-500'
          }`}
        >
          {icon}
        </span>
        <span className="text-sm uppercase font-semibold">{text}</span>
      </a>
    </li>
  );
}

export function Layout( { children }: LayoutTypes) {
  return (
    <div className="min-h-screen lg:min-w-screen flex flex-row lg:flex-col bg-stone-300">
      <div className="lg:fixed lg:top-0 lg:z-50 flex flex-col lg:flex-row w-32 lg:h-32 lg:w-full bg-stone-300 overflow-hidden border-r-[1px] border-solid border-gray-200">
        <div className="flex items-center justify-center h-28 lg:w-64 mb-4 bg-base">
          <h1 className="fixed text-3xl text-white font-serif">Rick and Morty</h1>
        </div>
        <ul className="fixed top-0 z-50 flex flex-col lg:flex-row py-32 lg:py-9 lg:px-4 lg:justify-end lg:items-center lg:w-full gap-6">
          <NavbarItem text={'Matches'}  />
          <NavbarItem
            text={'Images'}
            isSelected={true}
          />
          <NavbarItem text={'Cases'} />
          <NavbarItem text={'Takedowns'} />
          <NavbarItem text={'Register'}  />
        </ul>
      </div>
      <div className="min-h-screen lg:min-w-screen w-full lg:h-full flex flex-col lg:flex-row items-center lg:pt-32">
        {children}
      </div>
    </div>

  );
}