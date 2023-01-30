import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoLocation } from 'react-icons/all';

import { CardList } from '../../components/CardList';
import { useQueryGetCharacters } from '../../hooks/useQueryGetCharacters';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

export function HomePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  const { data: characterData, loading: characterDataLoading } = useQueryGetCharacters({
    variables: {
      page: page,
    },
    onCompleted: data => setTotalPage(data.characters?.info?.pages | 0),
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <>
      <Header title='Characters' />
      <Pagination onPageChange={handlePage}
                  pageCount={totalPage} currentPage={page} />
      {!characterDataLoading || characterData ?
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center '>
          {characterData?.characters?.results?.map((character) => (
            <CardList key={`card-${character?.id}`}
                      title={character?.name as string}
                      image={character?.image as string}
                      icon={<GoLocation />}
                      description={character?.location?.name as string}
                      status={character?.status as string}
                      type={character?.species as string}
            />
          ))}
        </div>
        : <Loader />
      }
      <Pagination onPageChange={handlePage}
                  pageCount={totalPage} currentPage={page} />
    </>
  );
}