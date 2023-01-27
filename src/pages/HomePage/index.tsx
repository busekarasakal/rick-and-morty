import { CardList } from '../../components/CardList';
import { CharacterService } from '../../services/CharacterService';

export function HomePage() {
  const characterList = CharacterService.getCharacterList().characterList;

  console.log({ characterList });

  return (
    <div className='flex flex-col lg:justify-between lg:content-center lg:flex-row lg:flex-wrap'>
      {characterList.map(({ id, name, image, species, status, location }) => (
        <CardList key={id} title={name} image={image} description={location.name} status={status} type={species} />
      ))}
    </div>
  );
}