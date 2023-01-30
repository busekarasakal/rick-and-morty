import { useState } from 'react';

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
      page: page + 1,
    },
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return !episodeDataLoading || episodeData ? (
    <>
      <Header title='Episodes' />
      <Pagination onPageChange={handlePage}
                  pageCount={episodeData?.episodes?.info?.pages! | 1} marginPagesDisplayed={3} currentPage={page} />
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center lg:p-16 '>
        {episodeData?.episodes?.results?.map((episode) => (
          <CardList key={`card-${episode?.id}`}
                    title={episode?.name as string}
                    image={PLACE_HOLDER_IMAGE}
                    description={episode?.episode as string}
                    status={episode?.air_date as string} />
        ))}
      </div>
      <Pagination onPageChange={handlePage}
                  pageCount={episodeData?.episodes?.info?.pages! | 1} marginPagesDisplayed={3} currentPage={page} />
    </>
  ) : (
    (
      <Loader />
    )
  );
}