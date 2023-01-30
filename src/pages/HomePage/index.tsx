import { useState } from 'react';
import { GoLocation } from 'react-icons/all';

import { CardList } from '../../components/CardList';
import { useQueryGetCharacters } from '../../hooks/useQueryGetCharacters';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Character } from '../../graphql/generated/types';

export function HomePage() {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const { data: characterData, loading: characterDataLoading } = useQueryGetCharacters({
    variables: {
      page: page,
    },
    onCompleted: data => setTotalPage(data.characters?.info?.pages || 0),
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <>
      <Header title='Characters' />
      <Pagination onPageChange={handlePage}
                  pageCount={totalPage} currentPage={page} />
      {!characterDataLoading ?
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center pb-32'>
          {(characterData?.characters?.results as Character[])?.map((character) => (
            <CardList key={`card-${character.id}`}
                      title={character.name}
                      image={character.image}
                      icon={<GoLocation />}
                      description={character.location?.name}
                      status={character.status}
                      type={character.species}
            />
          ))}
        </div>
        : <Loader />
      }
    </>
  );
}