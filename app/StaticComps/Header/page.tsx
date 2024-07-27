import Link from "next/link"



const Header = () => {
    return <div className={`
        flex justify-between align-center w-full h-[4em] bg-backgroundDark
    `}>
       <a href="/" title="Logo" style={{filter:"brightness(0) saturate(100%) invert(73%) sepia(32%) saturate(697%) hue-rotate(16deg) brightness(108%) contrast(109%)"}}
       className={`w-[3.8em] bg-cover m-[0.1em]`}>
    <img src="https://cdn-icons-png.flaticon.com/512/9833/9833033.png" alt="Logo" />
    </a>

    <Link href={"/Characters"} className={`
            flex items-center justify-center uppercase w-[8em] text-white text-center shadow-inside shadow-white transition-duration-75
            hover:text-secondary hover:shadow-secondary
        `} > Characters </Link> 
    </div>
}

export default Header