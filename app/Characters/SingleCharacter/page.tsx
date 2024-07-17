`use client`


const SingleCharacter = (props: any) => {

    console.log(props.name)

    return <section className={` characters__single
    flex flex-col gap-y-8 items-center h-auto bg-black w-22 p-4 text-white wrap border-2 border-secondary rounded-md animate-appear 
    duration-100 relative 
    hover:shadow-default hover:shadow-secondary 
    
    `} 
    style={{animationTimeline: "view()", animationRange:"entry 0% cover 30%", clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
    >
        <div className="characters__single__bg
        absolute w-3/5 h-[30rem] bg-secondary z-[-2] opacity-25 rotate-[60deg]
        "> </div>
        <div className="character__single__card
        flex items-center  w-full gap-x-4
        
        ">
        <img 
        src="https://cdn-icons-png.flaticon.com/512/3759/3759331.png" 
        alt="Profile photo"
        className={`character__single__card__img
            w-1/4 h-20 aspect-square
            `} 
        style={{filter:"brightness(0) saturate(100%) invert(73%) sepia(32%) saturate(697%) hue-rotate(16deg) brightness(108%) contrast(109%)"}}
        />
        <ul className="character__single__card__info list-disc">
            <h2 className=" font-bold " >{props.name}</h2>
            <li className=" ml-4 " >{props.gender}</li>
            <li className=" ml-4 " >{props.height}</li>
            <li className=" ml-4 " >{props.birth_year}</li>
        </ul>
        </div>
        <button
            className="characters__single__btn
            uppercase text-secondary rounded-md w-4/5 bg-secondary text-black p-2 mt-16 mb-4
            hover:font-bold 
            "
        >
            Starships <span className=" " >?</span>
        </button>
    </section>
}


export default SingleCharacter