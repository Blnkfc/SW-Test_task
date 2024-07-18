'use client'
import { Character, Film, Starship } from '@/interfaceList';
import {ReactFlow, type Node } from '@xyflow/react';
import axios from 'axios'; 
import { useEffect, useState } from 'react';



const CharacterFlow = ({params}:{params: {charId:number}}) => {
    //State containing character object from /people/id url.
    const [characterInfo, setCharacterInfo] = useState<Character>()
    //State for an array of objects resembling starships of current character from /starships/id url.
    const [starships, setStarships] = useState<Starship[]>([])
    //State for an array of objects resembling films of current character from /films/id url.
    const [films, setFilms] = useState<Film[]>([])


    //Fecthing the character object using dynamic parameter from current url.
    useEffect(() => {
        const fetchData = async() => {
            const characterResponse = await axios.get(`https://sw-api.starnavi.io/people/${params.charId}`)
            setCharacterInfo(characterResponse.data)
        }

        fetchData()
    }, [])
    //Making parallel requests for array of film's ids and array of starship's ids.
    useEffect(() => {
        const filmsRequests = characterInfo?.films.map(async (f) => await  axios.get(`https://sw-api.starnavi.io/films/${f}`)) || []
        const starshipsRequests = characterInfo?.starships.map(async (s) => await axios.get(`https://sw-api.starnavi.io/starships/${s}`)) || []
        const fetchData = async() => {
            const filmsResponses = await axios.all(filmsRequests)
            const starshipsResponses = await axios.all(starshipsRequests)
            
            setFilms(filmsResponses.map((fres) => fres.data))
            setStarships(starshipsResponses.map((sres) => sres.data))
        }
        

        fetchData()
    }, [characterInfo])

    console.log(`CHARACTERS: ${characterInfo}, FILMS: ${films}, STARSHIPS: ${starships}`)
    const characterNodes: Node[] = [
        {
            id: characterInfo?.id?.toString() ?? " " ,
            position: {x: 100, y: 100},
            data:{ label: characterInfo?.name ?? "Unknown Name" }
        }
    ]
    


    return <div className={`
        w-[500px] h-[500px] border-2 border-black
    `}>
        <ReactFlow nodes = {characterNodes} />
    </div>
}

export default CharacterFlow