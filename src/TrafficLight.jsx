import React, { useState } from 'react';
import './style.css'; // Asegúrate de importar el archivo CSS

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const colors = ["red", "yellow", "green", "purple"];

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    return (
        <div className="traffic-light">
            <div 
                className={`light red ${color === "red" ? "active" : "inactive"}`} 
                onClick={() => handleClick("red")} 
            />
            <div 
                className={`light yellow ${color === "yellow" ? "active" : "inactive"}`} 
                onClick={() => handleClick("yellow")} 
            />
            <div 
                className={`light green ${color === "green" ? "active" : "inactive"}`} 
                onClick={() => handleClick("green")} 
            />
            <button onClick={toggleColor}>Toggle Color</button>
        </div>
    );
};

export default TrafficLight;