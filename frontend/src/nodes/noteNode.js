import { BaseNode } from './BaseNode';

export const NoteNode = ({ id }) => (
  <BaseNode label="Note" handles={[]}>
    <textarea 
      placeholder="Write a note..." 
      className="node-input nodrag"
      style={{ border: 'none', resize: 'none', minHeight: '60px' }}
    />
  </BaseNode>
);