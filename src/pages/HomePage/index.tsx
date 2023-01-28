import { CardList } from '../../components/CardList';
import { CharacterService } from '../../services/CharacterService';
import { Pagination } from '../../components/Pagination';

export function HomePage() {
  const characterList = CharacterService.getCharacterList().characterList;

  return (
    <>
      <div className='flex flex-col lg:justify-between lg:content-center lg:flex-row lg:flex-wrap'>
        {characterList.map(({ id, name, image, species, status, location }) => (
          <CardList key={`card-${id}`} id={id} title={name} image={image} description={location.name} status={status}
                    type={species} />
        ))}
      </div>
      <Pagination />
    </>
  );
}