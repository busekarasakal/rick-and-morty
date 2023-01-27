import { useEffect, useState } from "react";
import { CharacterType } from "../../types/character.types";

export const CharacterService = {
    getCharacterList() {
        const [characterList, setCharacterList] = useState<CharacterType[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            setIsLoading(true);
            fetch("https://rickandmortyapi.com/api/character")
                .then((response) => response.json())
                .then((data) => {
                    setCharacterList(data.results);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoading(false);
                });
        }, []);

        return { characterList, isLoading, error };
    },

    getCharacter(id: string) {
        const [character, setCharacter] = useState<CharacterType>();
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            setIsLoading(true);
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setCharacter(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoading(false);
                });
        }, []);
        
        return { character, isLoading, error };
    }
}