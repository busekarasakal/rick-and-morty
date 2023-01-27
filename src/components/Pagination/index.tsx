export function Pagination() {
  return (
    <nav>
      <ul className='flex justify-center pt-20 pb-10'>
        <li>
          <a href='#'
             className='px-3 py-2 ml-0 leading-tight text-white bg-white border border-zinc-600 rounded-l-lg bg-stone-800 hover:bg-zinc-700'>Previous</a>
        </li>
        <li>
          <a href='#'
             className='px-3 py-2 leading-tight text-white bg-white border border-zinc-600 rounded-r-lg bg-stone-800 hover:bg-zinc-700'>Next</a>
        </li>
      </ul>
    </nav>
  );
}