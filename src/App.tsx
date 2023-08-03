import React, {useState} from "react";
import "./App.css";

interface VegetableProps {
    name: string;
}

const vegetables: VegetableProps[] = [
    {name: "Carrot"},
    {name: "Broccoli"},
    {name: "Spinach"},
    {name: "Tomato"},
    {name: "Bell Pepper"},
    {name: "Cucumber"},
    {name: "Kale"},
];

const App: React.FC = () => {
    const [selectedVegetable, setSelectedVegetable] = useState<string>("");

    const handleSpin = () => {
        const randomIndex = Math.floor(Math.random() * vegetables.length);
        setSelectedVegetable(vegetables[randomIndex].name);
    };

    return (
        <div className="App">
            <h1>SnapVeg</h1>
            <div className="wheel">
                {selectedVegetable ? <p>Today's Vegetable: {selectedVegetable}</p> : null}
                <button onClick={handleSpin}>Spin the Wheel</button>
            </div>
        </div>
    );
};

export default App;
