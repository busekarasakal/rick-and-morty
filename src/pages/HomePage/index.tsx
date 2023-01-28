import { CardList } from '../../components/CardList';
import { CharacterService } from '../../services/CharacterService';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 4;

export function HomePage() {
  const [itemOffset, setItemOffset] = useState(0);

  const characterList = CharacterService.useGetCharacterList().characterList;
  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = characterList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(characterList.length / ITEMS_PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % characterList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center lg:p-16 '>
        {currentItems.map(({ id, name, image, species, status, location }) => (
          <CardList key={`card-${id}`} title={name} image={image} description={location.name} status={status}
                    type={species} />
        ))}
      </div>
      <div className='flex justify-center items-end w-full h-36 pt-24'>
        <ReactPaginate
          className='flex gap-20 h-full text-center items-center cursor-point shadow-lg shadow-zinc-700/50 text-white'
          activeClassName='text-xl font-bold text-lime-500'
          breakLabel='...'
          nextLabel='Next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< Previous'
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}