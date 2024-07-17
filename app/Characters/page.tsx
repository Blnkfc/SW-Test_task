import SingleCharacter from "./SingleCharacter/page"


const Characters = async () => {
    const axios = require('axios').default

    const fetchData = async(param:string) => {
        try{
            const res = await axios.get("https://sw-api.starnavi.io"+param)
            // console.log(res.data)
            return res.data
        }catch(error){
            console.log(error)
            throw(error)
        }
    }
    const getData = async(param:string) => {
        return await fetchData(param)
    }

    const people: any = await getData('/people')
    const films: any = await getData('/films')
    const starships: any = await getData('/starships')

    





    return <div className={`
        h-dvh   
    `} >
        <SingleCharacter />
    </div>
}


export default Characters