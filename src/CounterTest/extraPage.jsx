import React from "react";
import { GlobalState } from "../GlobalState/GlobalState.jsx";

const useGlobalState = () => React.useContext(GlobalState);

export function ExtraPage() {
    return (
        <>
            <div className="section-container" style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
                <div>
                    <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>Lorem Ipsum Page</h2>
                    <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", marginTop: "20px" }}>
                        Click Me
                    </button>
                </div>
            </div>
        </>
    );
}

export default ExtraPage;
