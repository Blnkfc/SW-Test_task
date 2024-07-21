
import { Film } from '@/interfaceList';
import { Handle, Position, Node, NodeProps } from '@xyflow/react';

type FilmNode = Node<{film: Film}, 'Film'> 


export default function FilmNode  (data:NodeProps<FilmNode>)  {

    console.log(`NODE DATA: ${JSON.stringify(data)}`)
    return <div className={`
        border-2 border-secondary rounded-md p-4 bg-backgroundDark text-white shadow-default
    `} >
        <h2>{data.data.film.title}</h2>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
    </ div>
}
