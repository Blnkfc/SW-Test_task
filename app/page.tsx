

import Link from "next/link"

const TitlePage = async  () => {


  return <div className={`
  h-dvh flex flex-col justify-around align-center bg-black text-white 
  `} >
    <h1>TitlePage</h1>
    <Link href={"/Characters"} className={`
      m-8 p-4  text-secondary/[40] border-2 border-secondary w-fit rounded-md transition-all duration-300
      hover:text-black/[100]  hover:bg-secondary hover:shadow-lg hover:shadow-secondary hover:mt-4
      `} >Learn more</Link>
  </div>

}

export default TitlePage