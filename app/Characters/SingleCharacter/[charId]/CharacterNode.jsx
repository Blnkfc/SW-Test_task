
import { Handle, Position } from '@xyflow/react';



export default function CharacterNode  ({data})  {

    console.log(`NODE DATA: ${JSON.stringify(data)}`)
    return <div className={`
        border-2 border-secondary rounded-md p-4 bg-backgroundDark text-white shadow-default
    `} >
        <ul className="character__single__card__info list-disc">
            <h2 className=" font-bold text-secondary " >{data.character?.name ?? " " }</h2>
            <li className=" ml-4 " >{data.character?.gender ?? " "}</li>
            <li className=" ml-4 " >{data.character?.height ?? " "}</li>
            <li className=" ml-4 " >{data.character?.birth_year ?? " "}</li>
        </ul>
        <Handle type="source" position={Position.Right} />
    </ div>
}
