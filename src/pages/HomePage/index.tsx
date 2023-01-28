import { CardList } from '../../components/CardList';
import { CharacterService } from '../../services/CharacterService';

export function HomePage() {
  const characterList = CharacterService.getCharacterList().characterList;

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:content-center'>
        {characterList.map(({ id, name, image, species, status, location }) => (
          <CardList key={`card-${id}`} title={name} image={image} description={location.name} status={status}
                    type={species} />
        ))}
      </div>
    </>
  );
}