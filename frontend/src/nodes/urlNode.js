
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const URLNode = ({ id }) => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateURL = (value) => {
    setUrl(value);
    // Simple Regex for URL validation
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    
    setIsValid(!!pattern.test(value) || value === '');
  };

  return (
    <BaseNode 
      label="URL Input" 
      handles={[{ type: 'source', position: Position.Right, id: `${id}-url-out` }]}
    >
      <div className="node-content-vertical">
        <label className="node-label">
          Endpoint URL:
          <input 
            type="url" 
            className="node-input"
            style={{ borderColor: isValid ? '#e5e7eb' : '#ef4444' }} // Red border if invalid
            value={url}
            onChange={(e) => validateURL(e.target.value)}
            placeholder="https://example.com"
          />
        </label>
        {!isValid && (
          <span style={{ color: '#ef4444', fontSize: '9px' }}>
            Invalid URL format
          </span>
        )}
      </div>
    </BaseNode>
  );
};