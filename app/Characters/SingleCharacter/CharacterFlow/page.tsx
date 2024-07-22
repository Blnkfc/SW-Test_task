'use client'
import { Character, Film, Starship } from '@/interfaceList';
import {Edge, ReactFlow, type Node } from '@xyflow/react';
import axios from 'axios'; 
import { useEffect, useState } from 'react';
import '@xyflow/react/dist/style.css';
import CharacterNode from './CharacterNode';
import FilmNode from './FilmNode'
import StarshipNode from './StarshipNode'
import Link from 'next/link';
const nodeTypes = {
    "CharacterNode": CharacterNode,
    "FilmNode": FilmNode,
    "StarshipNode": StarshipNode
}


const CharacterFlow = (props:{character:Character, isDisplayed:boolean}) => {
    //State containing character object from /people/id url.
    const [characterInfo, setCharacterInfo] = useState<Character>()
    //State for an array of objects resembling starships of current character from /starships/id url.
    const [starshipsList, setStarships] = useState<Starship[]>([])
    //State for an array of objects resembling films of current character from /films/id url.
    const [filmsList, setFilms] = useState<Film[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const initialNodes: Node[] = []
    const initialEdges: Edge[] = []

    //Fecthing the character object using dynamic parameter from current url.
    useEffect(() => {
        setIsLoading(true)
        setCharacterInfo(props.character)
    }, [props])
    //Making parallel requests for array of film's ids and array of starship's ids.
    
    useEffect(() => {
        if(props.isDisplayed){
            if(isLoading){
                const filmsRequests = characterInfo?.films.map(async (f) => await  axios.get(`https://sw-api.starnavi.io/films/${f}`)) || []
                const starshipsRequests = characterInfo?.starships.map(async (s) => await axios.get(`https://sw-api.starnavi.io/starships/${s}`)) || []
                const fetchData = async() => {
                    const filmsResponses = await axios.all(filmsRequests)
                    const starshipsResponses = await axios.all(starshipsRequests)
                    
                    
                    setFilms(filmsResponses.map((fres) => fres.data))
                    setStarships(starshipsResponses.map((sres) => sres.data))
                }
                fetchData()
                setIsLoading(false)
                console.log(`IS LOADING: ${isLoading}`)
                }
                
        }
        
    }, [characterInfo, props.isDisplayed])

    


   // console.log(`CHARACTERS: ${characterInfo}, FILMS: ${filmsList}, STARSHIPS: ${starshipsList}`)


    //ESTABLISHING THE NODES FOR CHARACTERS, FILMS AND STARSHIPS
    const characterNodes: Node[] = [
        {
            id: characterInfo?.id?.toString()+"c" ?? " " ,
            position: {x: 100, y: 50},
            data:{ character: characterInfo },
            type: "CharacterNode"
        }
    ]

    //FILM NODES
    //Iterates through every film from the character.films request
    const filmNodes: Node[] = filmsList.
    map((f, index) => {
        return {
            id: f?.id?.toString()+"f" ?? " ",
            position: {x: 400, y:100*index},
            data: {film: f},
            type: "FilmNode"
        }
    })

    //STARSHIP NODES
    //Iterates through every starship from the character.starships request
    const starshipNodes: Node[] = starshipsList.
    map((s, index) => {
        return {
            id: s?.id?.toString()+"s" ?? " ",
            position: {x: 700, y: 100*index},
            data: {starship: s},
            type: "StarshipNode"
        }
    })
    // console.log(`NODES: ${JSON.stringify(initialNodes.concat(characterNodes, filmNodes))}`)



    //ESTABLISHING THE EDGES FOR CHARACTER, FILMS AND STARSHIPS

    //Iterating through character.films and creating an edge from character to films
    const characterEdges: Edge[] = filmsList.
    map((f) => {
        return {
            id: `${characterInfo?.id.toString()}c-${f.id.toString()}f`,
            source: `${characterInfo?.id.toString()}c`,
            target: `${f.id.toString()}f`
        }
    })
    // console.log(`Edges: ${JSON.stringify(characterEdges)}`)


    //Iterating through character.starships returning an edge from filtered films array, where starship id = film id 
    const starshipEdges: Edge[] = starshipsList
    .flatMap((s) => {
        return filmsList
            .filter(f => f.starships.includes(s.id))
            .map(f => ({
                id: `${f?.id.toString()}f-${s?.id.toString()}s`,
                source: `${f?.id.toString()}f`,
                target: `${s?.id.toString()}s`
            }));
    });


    if (isLoading) return <div className={'w-full h-dvh bg-black flex justify-center items-center'}>
        <img 
        src="https://cdn-icons-png.flaticon.com/512/11463/11463006.png" 
        alt="Loading..."  
        style={{filter:"brightness(0) saturate(100%) invert(73%) sepia(32%) saturate(697%) hue-rotate(16deg) brightness(108%) contrast(109%)"}}
        className={` w-[10%] h-auto motion-safe:animate-spin  `}
        />
        
    </div>;

    return <div className={`
        w-[100%] h-[500px] border-2 border-black relative
    `}>
        <ReactFlow 
        colorMode='dark'
        nodes={initialNodes.concat(characterNodes, filmNodes, starshipNodes)} 
        edges={initialEdges.concat(characterEdges, starshipEdges)}
        nodeTypes={nodeTypes}
        />
    </div>
}

export default CharacterFlow