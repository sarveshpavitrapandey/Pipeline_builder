// outputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode'; // Import your abstraction layer

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  // Configuration for the target handle on the left
  const outputHandles = [
    { 
      type: 'target', 
      position: Position.Left, 
      id: `${id}-value` 
    }
  ];

  return (
    <BaseNode label="Output" handles={outputHandles}>
      <div className="node-content-vertical">
        <label className="node-label">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="node-input nodrag" 
          />
        </label>
        <label className="node-label">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="node-select nodrag"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}