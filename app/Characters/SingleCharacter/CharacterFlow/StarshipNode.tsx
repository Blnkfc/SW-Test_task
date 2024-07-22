
import { Starship } from '@/interfaceList';
import { Handle, Position, Node, NodeProps } from '@xyflow/react';

type StarshipNode = Node<{starship: Starship}, 'Starship'>

export default function StarshipNode  (data:NodeProps<StarshipNode>)  {

    console.log(`NODE DATA: ${JSON.stringify(data)}`)
    return <div className={`
        border-2 border-secondary rounded-md p-4 bg-backgroundDark text-white shadow-default scale-[0.8]
    `} >
        <h2>{data.data.starship.name}</h2>
        <Handle type="target" position={Position.Left} />
        
    </ div>
}
