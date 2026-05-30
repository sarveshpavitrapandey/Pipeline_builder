🚀 Pipeline Builder Pro
A full-stack, modular low-code environment for building AI workflows. This project allows users to drag-and-drop custom nodes, create dynamic text templates with variable parsing, and validate the structural integrity of the pipeline using graph theory.

🛠️ Tech Stack
Frontend: React.js, React Flow, Zustand (State Management)

Backend: FastAPI (Python)

Graph Analysis: NetworkX

Styling: Custom CSS with a unified design system

✨ Key Features
1. Modular "BaseNode" Architecture
I implemented a structural abstraction called BaseNode. This acts as a reusable blueprint for all 9 custom nodes.

Scalability: New nodes can be added in minutes by simply passing new children and handle configurations.

Consistency: Manages a unified header, internal spacing, and dynamic handle rendering across the entire application.

2. Smart Text Node (Regex Variable Parsing)
The Text Node features an observer that "listens" for variables wrapped in double brackets (e.g., {{variable_name}}).

Dynamic Handles: Automatically generates a target handle on the left for every unique variable detected.

Auto-Resizing: The UI dynamically adjusts its height as the user types to ensure a clean workspace.

3. Defensive Design & Validation
To ensure high data quality, I implemented client-side validation:

URL Node: Real-time regex validation with visual feedback (red borders) for invalid links.

Timer Node: Restricts input to positive integers to prevent logical errors in execution.

4. Backend Graph Validation (DAG Check)
The pipeline is sent to a FastAPI backend where it is converted into a Directed Graph using the NetworkX library.

Cycle Detection: The system performs a Directed Acyclic Graph (DAG) check. If a loop is detected (e.g., Output pointing back to Input), the system warns the user and prevents invalid submission.

🚀 Getting Started
Prerequisites
Node.js (v16+)

Python 3.9+

Frontend Setup
Navigate to the frontend directory.

Install dependencies: npm install

Start the application: npm start

Backend Setup
Navigate to the backend directory.
├── frontend/
│   ├── src/
│   │   ├── nodes/       # All 9 custom node components
│   │   ├── BaseNode.js  # The reusable node blueprint
│   │   ├── ui.js        # React Flow canvas setup
│   │   ├── store.js     # Zustand state management
│   │   └── submit.js    # Backend integration logic
└── backend/
    └── main.py          # FastAPI server & DAG logic

Install requirements: pip install fastapi uvicorn networkx

Run the server: uvicorn main:app --reload
