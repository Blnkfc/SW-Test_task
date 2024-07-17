`use client`
import Image from "next/image"

const SingleCharacter = (props: any) => {

    console.log(props.name)

    return <div className={`
    flex h-40 bg-black w-22 text-white wrap border-2 border-secondary rounded-md animate-appear 
    `} 
    style={{animationTimeline: "view()", animationRange:"entry 0% cover 20%"}}
    >
        <Image 
        
        />
        <h2>{props.name}</h2>
    </div>
}


export default SingleCharacter