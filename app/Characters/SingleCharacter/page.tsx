"use client"
import { Character } from "@/interfaceList"
import Link from "next/link"
import CharacterFlow from "./CharacterFlow/CharacterFlow"
import { useState } from "react"






const SingleCharacter = (props: any) => {
    const [flowDisplay, setFlowDisplay] = useState(false)
    
    const toggleFlowDisplay = () => {
        setFlowDisplay(!flowDisplay)
    }

    return <div className={` characters__single group/main
    flex  gap-x-8 justify-around items-center h-auto bg-black ${flowDisplay?"w-[95%] fixed top-50 z-[999]":"w-22 static "} p-4 text-white wrap border-2 border-secondary rounded-md animate-appear 
    duration-100  z-[2] transition-all
    hover:translate-y-[-1em]
    
    `}
    style={{animationTimeline: "view()", animationRange:"entry 0% cover 30%", clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
    >
        <div className="flex-col" >
        <div className="characters__single__bg
        absolute w-0 h-0 border-b-[10em] border-secondary border-l-[23em] border-l-transparent opacity-25 right-0 bottom-0 z-[-1] 
        transition-all
        group-hover/main:border-b-[12em] group-hover:border-l-[25em]
        "> </div>
        <div className="character__single__card
        flex items-center justify-between w-full gap-x-4 
        
        ">
        <img 
        src="https://cdn-icons-png.flaticon.com/512/3759/3759331.png" 
        alt="Profile photo"
        className={`character__single__card__img
             h-20 aspect-square
            `} 
        style={{filter:"brightness(0) saturate(100%) invert(73%) sepia(32%) saturate(697%) hue-rotate(16deg) brightness(108%) contrast(109%)"}}
        />
        
        <ul className="character__single__card__info list-disc">
            <h2 className=" font-bold " >{props.character?.name ?? " " }</h2>
            <li className=" ml-4 " >{props.character?.gender ?? " "}</li>
            <li className=" ml-4 " >{props.character?.height ?? " "}</li>
            <li className=" ml-4 " >{props.character?.birth_year ?? " "}</li>
        </ul>


        </div>
        <button
            className="isolate characters__single__btn group/btn
            uppercase text-black rounded-md w-4/5 bg-secondary text-black p-2 mt-16 mb-4 transition-all text-center
            hover:font-bold 
            "
            onClick={toggleFlowDisplay}
        >
            Starships <span className=" group-hover/btn:ml-2 " >?</span>
        </button>
        </div>

        <div className={`
            ${flowDisplay?"static block scale-1":"absolute hidden scale-0"}  border-2 border-secondary grow transition-all
            `}>
        <CharacterFlow  character={props.character} isDisplayed = {flowDisplay}/>
        <button className="absolute top-0 right-0 p-8 text-secondary z-[999] text-3xl font-bold hover:animate-pulse" onClick={toggleFlowDisplay} > X </button>
        </div>
    </div>
}


export default SingleCharacter