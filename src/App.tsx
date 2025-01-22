import React, { useState } from "react";
import Practice from "./Practice";
import Test from "./Test";

const App: React.FC = () => {
    const [tab, setTab] = useState("practice");

    const buttonStyle = (active: boolean) => ({
      padding: "1rem 2rem",
      margin: "0 10px",
      background: active
          ? "linear-gradient(90deg,#6FC0E1  0%,  #2976AF 100%)"
          : "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%)",
      color: active ? "white" : "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background 0.3s ease",
    });

    const containerStyle = {
        padding: "2rem",
        fontFamily: "Arial",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center" as const,
    };

    const buttonContainerStyle = {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap" as const,
        gap: "10px",
    };

    const footerStyle = {
        marginTop: "2rem",
        fontSize: "0.9rem",
        color: "#EFF8FB",
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: "1.8rem", marginBottom: "2rem", color: "#6FC0E1"}}>AFAA Group Fitness Instructor App</h1>
            <div style={buttonContainerStyle}>
                <button
                    onClick={() => setTab("practice")}
                    style={buttonStyle(tab === "practice")}
                >
                    Practice
                </button>
                <button
                    onClick={() => setTab("test")}
                    style={buttonStyle(tab === "test")}
                >
                    Test
                </button>
            </div>
            <div style={{ marginTop: "2rem"}}>
                {tab === "practice" && <Practice />}
                {tab === "test" && <Test />}
            </div>
            <footer style={footerStyle}>
                © 2025 Aleksandra. All Rights Reserved.
                Help to prepare and pass AFAA GFI Test.
            </footer>
        </div>
    );
};

export default App;
