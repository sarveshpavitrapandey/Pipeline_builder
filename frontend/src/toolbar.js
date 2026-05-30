// toolbar.js
// This creates the palette of nodes you can drag onto the canvas
// -----------------------------------------------------------

export const PipelineToolbar = () => {
    const onDragStart = (event, nodeType) => {
        // This transfers the node type data to the drop zone in ui.js
        event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
        event.dataTransfer.effectAllowed = 'move';
    };

    const nodeButtons = [
        // Original nodes
        { label: 'Input', type: 'customInput' },
        { label: 'LLM', type: 'llm' },
        { label: 'Output', type: 'customOutput' },
        { label: 'Text', type: 'text' },
        
        // --- THE 5 NEW NODES NOW VISIBLE IN UI ---
        { label: 'Note', type: 'note' },
        { label: 'URL', type: 'url' },
        { label: 'Timer', type: 'timer' },
        { label: 'Condition', type: 'condition' },
        { label: 'Color', type: 'color' },
    ];

    return (
        <div style={{ 
            padding: '15px', 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap', 
            backgroundColor: '#fff', 
            borderBottom: '1px solid #e5e7eb',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
            {nodeButtons.map((btn) => (
                <div
                    key={btn.type}
                    className="dndnode" 
                    onDragStart={(event) => onDragStart(event, btn.type)}
                    draggable
                    style={{
                        cursor: 'grab',
                        padding: '8px 16px',
                        border: '1px solid #6366f1',
                        borderRadius: '6px',
                        color: '#4f46e5',
                        fontSize: '13px',
                        fontWeight: '500',
                        textAlign: 'center',
                        backgroundColor: '#f5f3ff'
                    }}
                >
                    {btn.label}
                </div>
            ))}
        </div>
    );
};