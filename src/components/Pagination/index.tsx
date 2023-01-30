import ReactPaginate from 'react-paginate';
import { PaginationType } from '../../types/pagination.type';

export function Pagination({onPageChange, pageCount, marginPagesDisplayed = 0, currentPage}: PaginationType) {
  return(
    <div className='flex justify-center items-end w-auto lg:w-full h-36 pt-24'>
      <ReactPaginate
        className='flex lg:gap-20 gap-8 h-full text-center items-center lg:mb-6 cursor-point text-white'
        activeClassName='lg:text-xl font-bold text-lime-500'
        breakLabel='...'
        nextLabel=' >'
        onPageChange={onPageChange}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        previousLabel='< '
        forcePage={currentPage}
      />
    </div>
  )
}