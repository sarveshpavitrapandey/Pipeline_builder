
export const SubmitButton = ({ nodes = [], edges = [] }) => {
    
    const handleSubmit = async () => {
        // Validation: Prevent submitting an empty canvas
        if (!nodes || nodes.length === 0) {
            alert("Your pipeline is empty! Add some nodes before submitting.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) throw new Error('Backend connection failed');

            const result = await response.json();

            // Part 4: User-friendly Alert with backend results
            alert(
                `Pipeline Analysis Success!\n\n` +
                `Total Nodes: ${result.num_nodes}\n` +
                `Total Edges: ${result.num_edges}\n` +
                `Is Valid Pipeline (DAG): ${result.is_dag ? 'Yes' : 'No (Cycle Detected)'}`
            );
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Error: Could not connect to the backend server.");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
            <button 
                type="button" 
                onClick={handleSubmit}
                className="submit-button"
            >
                Submit Pipeline
            </button>
        </div>
    );
};