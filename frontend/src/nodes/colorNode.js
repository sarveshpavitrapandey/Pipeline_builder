import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ColorNode = ({ id }) => (
  <BaseNode 
    label="Color Input" 
    handles={[{ type: 'source', position: Position.Right, id: `${id}-hex` }]}
  >
    <input type="color" defaultValue="#6366f1" className="nodrag" style={{ width: '100%', height: '30px', cursor: 'pointer' }} />
  </BaseNode>
);