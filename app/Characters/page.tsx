'use client'
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import SingleCharacter from './SingleCharacter/page';
import { Character } from '@/interfaceList';



const Characters = () => {
    //States for full characters list and loading while fetching.
    //Setter fires in GET requests
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    //Executing GET request and fetching every page of characters
    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            let nextPageUrl = 'https://sw-api.starnavi.io/people/';
            let allCharacters:Character[] = [];
            
            //making a GET request on the initial url and executing API next, to access next page
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

    
    console.log(isLoading)
    return (
        <div className=" characters
        flex flex-wrap  gap-y-6  gap-x-2  justify-around h-full p-10 bg-black
        ">
            {characters.map((character) => (
                <SingleCharacter key={character.id} character={character} />
            ))}
            <div className={'w-full h-dvh bg-black flex justify-center items-center'}
                style={{ position:!isLoading?'absolute':`static`}}>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/11463/11463006.png" 
                alt="Loading..."  
                style={{filter:"brightness(0) saturate(100%) invert(73%) sepia(32%) saturate(697%) hue-rotate(16deg) brightness(108%) contrast(109%)",
                    display:!isLoading?`none`:`block`
                }}
                className={` w-[10%] h-auto motion-safe:animate-spin  `}
        />
        
    </div>
        </div>
    );
};

export default Characters;