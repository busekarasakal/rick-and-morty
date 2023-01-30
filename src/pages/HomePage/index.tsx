import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { CardList } from '../../components/CardList';
import { useQueryGetCharacters } from '../../hooks/useQueryGetCharacters';
import { Loader } from '../../components/Loader';
import { Header } from '../../components/Header';

export function HomePage() {
  const [page, setPage] = useState<number>(1);

  const { data: characterData } = useQueryGetCharacters({
    variables: {
      page,
    },
  });

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
      <div className='flex justify-center items-end w-auto lg:w-full h-36 pt-24'>
        <ReactPaginate
          className='flex lg:gap-20 gap-8 h-full text-center items-center lg:mb-6 cursor-point text-white'
          activeClassName='lg:text-xl font-bold text-lime-500'
          breakLabel='...'
          nextLabel=' >'
          onPageChange={() => setPage((prevState) => prevState + 1)}
          pageRangeDisplayed={2}
          pageCount={characterData?.characters?.info?.pages! | 1}
          marginPagesDisplayed={0}
          previousLabel='< '
        />
      </div>
    </>
  ) : (
    (
      <Loader />
    )
  );
}