import { CardList } from '../../components/CardList';
import { CharacterService } from '../../services/CharacterService';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export function HomePage() {
  const [page, setPage] = useState<number>(1);
  const { characterList, listInfo } = CharacterService.useGetCharacterList(page);

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center lg:p-16 '>
        {characterList.map(({ id, name, image, species, status, location }) => (
          <CardList key={`card-${id}`} title={name} image={image} description={location.name} status={status}
                    type={species} />
        ))}
      </div>
      <div className='flex justify-center items-end w-auto lg:w-full h-36 pt-24'>
        <ReactPaginate
          className='flex lg:gap-20 gap-8 h-full text-center items-center lg:mb-6 cursor-point shadow-lg shadow-zinc-700/50 text-white'
          activeClassName='lg:text-xl font-bold text-lime-500'
          breakLabel='...'
          nextLabel=' >'
          onPageChange={() => setPage((prevState) => prevState + 1)}
          pageRangeDisplayed={2}
          pageCount={listInfo!.pages | 1}
          marginPagesDisplayed={0}
          previousLabel='< '
        />
      </div>
    </>
  );
}