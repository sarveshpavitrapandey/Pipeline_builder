from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx 

app = FastAPI()

#CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # The URL of  React frontend
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods like GET, POST, OPTIONS
    allow_headers=["*"], # Allows all headers like Content-Type
)

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    # Initialize the Directed Graph using NetworkX
    G = nx.DiGraph()

    # Build the graph structure
    for node in nodes:
        G.add_node(node.get('id'))
    
    for edge in edges:
        G.add_edge(edge.get('source'), edge.get('target'))

    # Perform the Directed Acyclic Graph (DAG) check
    is_dag = nx.is_directed_acyclic_graph(G)
    
    # Return response in the format specified by Part 4
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag
    }