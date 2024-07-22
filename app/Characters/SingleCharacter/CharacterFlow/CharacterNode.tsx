import { Character } from '@/interfaceList';
import { Handle, NodeProps, Position, Node} from '@xyflow/react';

type CharacterNode = Node<{character: Character}, 'Character'>


export default function CharacterNode  (data:NodeProps<CharacterNode>)  {

    console.log(`NODE DATA: ${JSON.stringify(data)}`)
    return <div className={`
        border-2 border-secondary rounded-md p-4 bg-backgroundDark text-white shadow-default scale-[0.8]
    `} >
        <ul className="character__single__card__info list-disc">
            <h2 className=" font-bold text-secondary " >{data.data.character?.name ?? " " }</h2>
            <li className=" ml-4 " >{data.data.character?.gender ?? " "}</li>
            <li className=" ml-4 " >{data.data.character?.height ?? " "}</li>
            <li className=" ml-4 " >{data.data.character?.birth_year ?? " "}</li>
        </ul>
        <Handle type="source" position={Position.Right} />
    </ div>
}
