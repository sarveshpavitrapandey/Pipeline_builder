
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => (
  <BaseNode 
    label="Wait / Delay" 
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-in` },
      { type: 'source', position: Position.Right, id: `${id}-out` }
    ]}
  >
    <div className="node-content-vertical">
      <label className="node-label">
        Delay (ms):
        <input 
          type="number" 
          defaultValue={1000} 
          min="0"            // Prevents negative time
          step="100"          // Increments by 100ms
          className="node-input nodrag" 
        />
      </label>
      <div style={{ fontSize: '9px', color: '#9ca3af', marginTop: '4px' }}>
        Pauses execution flow.
      </div>
    </div>
  </BaseNode>
);