import { useState } from 'react';
import { RiMovieLine } from 'react-icons/all';

import { CardList } from '../../components/CardList';
import { useQueryGetEpisodes } from '../../hooks/useQueryGetEpisodes';
import { PLACE_HOLDER_IMAGE } from '../../utils/constants';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

export function EpisodePage() {
  const [page, setPage] = useState<number>(0);

  const { data: episodeData, loading: episodeDataLoading } = useQueryGetEpisodes({
    variables: {
      page: page,
    },
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <>
      <Header title='Episodes' />
      <Pagination onPageChange={handlePage}
                  pageCount={episodeData?.episodes?.info?.pages! | 1} marginPagesDisplayed={3} currentPage={page} />
      {!episodeDataLoading || episodeData ?
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center'>
          {episodeData?.episodes?.results?.map((episode) => (
            <CardList key={`card-${episode?.id}`}
                      title={episode?.name as string}
                      image={PLACE_HOLDER_IMAGE}
                      description={episode?.episode as string}
                      status={episode?.air_date as string}
                      icon={<RiMovieLine />}
            />
          ))}
        </div> : <Loader />
      }
      <Pagination onPageChange={handlePage}
                  pageCount={episodeData?.episodes?.info?.pages! | 1} marginPagesDisplayed={3} currentPage={page} />
    </>
  );
}