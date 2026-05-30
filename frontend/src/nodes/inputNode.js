
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode'; // Import the abstraction layer

export const InputNode = ({ id, data }) => {
  // Maintain existing state logic for the name and type
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  // Define the handle configuration for this specific node
  const inputHandles = [
    { 
      type: 'source', 
      position: Position.Right, 
      id: `${id}-value` 
    }
  ];

  return (
    <BaseNode label="Input" handles={inputHandles}>
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
            value={inputType} 
            onChange={handleTypeChange} 
            className="node-select nodrag"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};