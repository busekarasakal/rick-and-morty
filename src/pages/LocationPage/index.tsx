import { useState } from 'react';
import dayjs from 'dayjs';
import { MdDateRange } from 'react-icons/all';

import { CardList } from '../../components/CardList';
import { useQueryGetLocations } from '../../hooks/useQueryGetLocations';
import { PLACE_HOLDER_IMAGE } from '../../utils/constants';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

export function LocationPage() {
  const [page, setPage] = useState<number>(0);

  const { data: locationData, loading: locationDataLoading } = useQueryGetLocations({
    variables: {
      page: page,
    },
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <>
      <Header title='Locations' />
      <Pagination onPageChange={handlePage}
                  pageCount={locationData?.locations?.info?.pages! | 1} currentPage={page} />
      {!locationDataLoading || locationData ?
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center'>
          {locationData?.locations?.results?.map((location) => (
            <CardList key={`card-${location?.id}`}
                      title={location?.name as string}
                      image={PLACE_HOLDER_IMAGE}
                      description={dayjs(location?.created).format('MMMM DD,YYYY')}
                      status={location?.type as string}
                      type={location?.dimension as string}
                      icon={<MdDateRange />}
            />
          ))}
        </div> : <Loader />
      }
      <Pagination onPageChange={handlePage}
                  pageCount={locationData?.locations?.info?.pages! | 1} currentPage={page} />
    </>
  );
}