
import { Handle, Position } from '@xyflow/react';



export default function StarshipNode  ({data})  {

    console.log(`NODE DATA: ${JSON.stringify(data)}`)
    return <div className={`
        border-2 border-secondary rounded-md p-4 bg-backgroundDark text-white shadow-default
    `} >
        <h2>{data.starship.name}</h2>
        <Handle type="target" position={Position.Left} />
        
    </ div>
}
