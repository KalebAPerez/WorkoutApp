import React, { useState } from 'react';

function Workouts() {
    // State to keep track of the graph names
    const [graphs, setGraphs] = useState([]);

    // Function to add a new graph
    const addGraph = () => {
        const name = prompt('Enter the graph name:');
        if (name) {
            setGraphs([...graphs, name]);
        }
    };

    // Inline styles for the button
    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    return (
        <div>
            <h2>Workout Tracker</h2>

            {/* Loop through the graphs and render each as a button */}
            {graphs.map((graphName, index) => (
                <button 
                    key={index} 
                    style={buttonStyle} 
                    onClick={() => alert(`Displaying data for: ${graphName}`)}
                >
                    {graphName}
                </button>
            ))}

            {/* Button to add a new graph with inline styles */}
            <button style={buttonStyle} onClick={addGraph}>Add Graph</button>
        </div>
    );
}

export default Workouts;
