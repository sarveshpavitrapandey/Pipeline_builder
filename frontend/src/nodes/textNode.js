// textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Part 3: Variable Handles Logic
  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    const matches = [...currText.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(m => m[1].trim()).filter(v => v))];
    setVariables(uniqueVars);
  }, [currText]);

  // Part 3: Dynamic Resizing Logic
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.width = 'auto';
      textAreaRef.current.style.width = `${Math.max(200, textAreaRef.current.scrollWidth)}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  // Combine default output handle with dynamic variable handles
  const textHandles = [
    { type: 'source', position: Position.Right, id: `${id}-output` },
    ...variables.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${varName}`,
      // Evenly distribute handles vertically
      style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode label="Text" handles={textHandles}>
      <div className="node-content-vertical">
        <label className="node-label">
          Text:
          <textarea
            ref={textAreaRef}
            value={currText}
            onChange={handleTextChange}
            className="node-input nodrag"
            style={{ resize: 'none', overflow: 'hidden', minHeight: '40px' }}
          />
        </label>
      </div>
    </BaseNode>
  );
};