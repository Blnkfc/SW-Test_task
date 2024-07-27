

import Link from "next/link"

const TitlePage = () => {


  return <div
  style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}} 
  className={`
  h-dvh flex flex-col justify-around align-center bg-black text-white relative
  `} >
    <h1 className={`
        uppercase text-9xl text-secondary
      `} >Starnavi Test Task</h1>
    <Link href={"/Characters"} className={` group
      ml-[8em] p-4 text-3xl text-secondary/[40] border-2 border-secondary w-fit rounded-md transition-all duration-300
      hover:text-black/[100]  hover:bg-secondary hover:shadow-lg hover:shadow-secondary hover:mt-4 transition-all
      `} >
    <div className="group-hover:border-t-[12em] group-hover:border-r-[20em]   transition-all
    absolute w-0 h-0 border-t-[10em] border-secondary border-r-[15em] border-r-transparent top-0 left-0 opacity-25 z-[-1] pointer-events-none"></div>
    <div className="group-hover:border-t-[18em] group-hover:border-r-[30em]   transition-all
    absolute w-0 h-0 border-t-[15em] border-secondaryDark border-r-[20em] border-r-transparent top-0 left-0 opacity-25 z-[-2] pointer-events-none"></div>
    <div className="group-hover:border-t-[28em] group-hover:border-r-[35em]   transition-all
    absolute w-0 h-0 border-t-[20em] border-secondaryDarker border-r-[30em] border-r-transparent top-0 left-0 opacity-25 z-[-3] pointer-events-none"></div>
    <div className="group-hover:border-b-[15em] group-hover:border-l-[20em]   transition-all
    absolute w-0 h-0 border-b-[10em] border-secondary border-l-[15em] border-l-transparent bottom-0 right-0 opacity-25 z-[-1] pointer-events-none"></div>
    <div className="group-hover:border-b-[20em] group-hover:border-l-[30em]   transition-all
    absolute w-0 h-0 border-b-[15em] border-secondaryDark border-l-[20em] border-l-transparent bottom-0 right-0 opacity-25 z-[-2] pointer-events-none"></div>
    <div className="group-hover:border-b-[25em] group-hover:border-l-[35em]   transition-all
    absolute w-0 h-0 border-b-[20em] border-secondaryDarker border-l-[30em] border-l-transparent bottom-0 right-0 opacity-25 z-[-3] pointer-events-none"></div>
        Learn more</Link>
  </div>

}

export default TitlePage