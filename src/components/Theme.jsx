import { useState } from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false); // ✅ unified name

    const toggleTheme = () => { 
        setDarkMode(!darkMode);
    };

    const appStyle = {
        backgroundColor: darkMode ? "#333" : "#f2f2f2",
        color: darkMode ? "#fff" : "#000",
        padding: "2rem",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "20px",
    };

    return (
        <div style={appStyle}>
            <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <button onClick={toggleTheme}>
                Switch to {darkMode ? "Light" : "Dark"} mode
            </button>
        </div>
    );
}

export default ThemeToggle;
