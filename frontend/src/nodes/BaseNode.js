import { Handle } from 'reactflow';

export const BaseNode = ({ label, children, handles = [] }) => {
  return (
    <div className="custom-node-container">
      <div className="custom-node-header">
        <span>{label}</span>
      </div>
      <div className="custom-node-content">
        {children}
      </div>
      {handles.map((handle, idx) => (
        <Handle
          key={handle.id || idx} 
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};