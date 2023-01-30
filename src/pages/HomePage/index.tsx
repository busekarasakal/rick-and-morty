import { useState } from 'react';
import { GoLocation } from 'react-icons/all';

import { useQueryGetCharacters } from '../../hooks/useQueryGetCharacters';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { Card } from '../../components/Card';

export function HomePage() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { data: characterData, loading: characterDataLoading } = useQueryGetCharacters({
    variables: {
      page,
    },
    onCompleted: data => setTotalPage(data.characters?.info?.pages || 0),
  });

  const handlePage = (data: { selected: number }) => {
    setPage(data.selected + 1);
  };

  return (
    <>
      <Pagination onPageChange={handlePage}
                  pageCount={totalPage}
                  currentPage={page - 1} />
      {!characterDataLoading ?
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center pb-32'>
          {characterData?.characters?.results?.map((character) => (
            <Card key={`card-${character.id}`}
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