import { useEffect, useState } from 'react';
import { CharacterType } from '../../types/character.type';
import { ListInfoType } from '../../types/serviceTypes/listInfo.type';

export const CharacterService = {
  useGetCharacterList(page = 1) {
    const [characterList, setCharacterList] = useState<CharacterType[]>([]);
    const [listInfo, setListInfo] = useState<ListInfoType>({ pages: 1, count: 1 });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true);
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacterList(data.results);
          setListInfo(data.info);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, [page]);

    return { characterList, listInfo, isLoading, error };
  },
};