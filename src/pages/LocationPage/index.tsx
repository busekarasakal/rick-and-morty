import { CardList } from '../../components/CardList';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import spinner from '../../assets/spinner.gif';
import { PLACE_HOLDER_IMAGE } from '../../utils/constants';
import { useQueryGetLocations } from '../../hooks/useQueryGetLocations';
import dayjs from 'dayjs';

export function LocationPage() {
  const [page, setPage] = useState<number>(1);

  const { data: locationData } = useQueryGetLocations({
    variables: {
      page,
    },
  });

  return locationData ? (
    <>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center lg:p-16 '>
        {locationData?.locations?.results?.map((location) => (
          <CardList key={`card-${location?.id}`}
                    title={location?.name as string}
                    image={PLACE_HOLDER_IMAGE}
                    description={dayjs(location?.created).format('MMMM DD,YYYY')}
                    status={location?.type as string}
                    type={location?.dimension as string}
          />
        ))}
      </div>
      <div className='flex justify-center items-end w-auto lg:w-full h-36 pt-24'>
        <ReactPaginate
          className='flex lg:gap-20 gap-8 h-full text-center items-center lg:mb-6 cursor-point text-white'
          activeClassName='lg:text-xl font-bold text-lime-500'
          breakLabel='...'
          nextLabel=' >'
          onPageChange={() => setPage((prevState) => prevState + 1)}
          pageRangeDisplayed={3}
          pageCount={locationData?.locations?.info?.pages! | 1}
          marginPagesDisplayed={0}
          previousLabel='< '
        />
      </div>
    </>
  ) : (
    (
      <div className='relative self-center lg:w-48 lg:h-full lg:pt-0 w-24 h-24 pt-4'>
        <img src={spinner} alt='spinner' className='absolute object-cover w-full h-full rounded-full lg:rounded-none' />
      </div>
    )
  );
}