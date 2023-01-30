import { useState } from 'react';

import { CardList } from '../../components/CardList';
import { useQueryGetCharacters } from '../../hooks/useQueryGetCharacters';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

export function HomePage() {
  const [page, setPage] = useState<number>(0);

  const { data: characterData } = useQueryGetCharacters({
    variables: {
      page: page + 1,
    },
  });

  const handlePage = (data: {selected: number}) => {
    setPage(data.selected);
  };

  return characterData ? (
    <>
      <Header title='Characters' />
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center lg:p-16 '>
        {characterData?.characters?.results?.map((character) => (
          <CardList key={`card-${character?.id}`}
                    title={character?.name as string}
                    image={character?.image as string}
                    description={character?.location?.name as string}
                    status={character?.status as string}
                    type={character?.species as string} />
        ))}
      </div>
      <Pagination onPageChange={handlePage}
                  pageCount={characterData?.characters?.info?.pages! | 1} currentPage={page} />
    </>
  ) : (
    (
      <Loader />
    )
  );
}