'use client'
import { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure Axios is installed and imported
import SingleCharacter from './SingleCharacter/page';


const Characters = () => {
    const [characters, setCharacters] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            let nextPageUrl = 'https://sw-api.starnavi.io/people/';
            let allCharacters:any = [];

            while (nextPageUrl) {
                const response = await axios.get(nextPageUrl);
                allCharacters = [...allCharacters, ...response.data.results];
                nextPageUrl = response.data.next; 
            }

            setCharacters(allCharacters);
            setIsLoading(false);
        };

        fetchCharacters();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="
        flex flex-wrap  gap-y-6  gap-x-2  justify-around h-full p-10 bg-black
        ">
            {characters.map((character) => (
                <SingleCharacter key={character.id} name={character.name} />
            ))}
        </div>
    );
};

export default Characters;