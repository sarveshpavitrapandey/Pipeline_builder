import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => (
  <BaseNode 
    label="Logic: If/Else" 
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-in` },
      { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%', background: '#22c55e' } },
      { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%', background: '#ef4444' } }
    ]}
  >
    <div style={{ fontSize: '10px', color: '#6b7280' }}>Routes based on condition.</div>
  </BaseNode>
);