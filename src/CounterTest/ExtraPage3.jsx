import React from "react";
import { GlobalState } from "../GlobalState/GlobalState.jsx";

const useGlobalState = () => React.useContext(GlobalState);

export function ExtraPage3() {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div
                className="section-container"
                style={{ backgroundColor: "#f2f2f2", padding: "20px" }}
            >
                <div>
                    <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>
                        Default Page
                    </h2>
                    <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
                        This is the default page of the application.
                        It can be customized with different content and styles.
                    </p>
                    <button
                        style={{
                            backgroundColor: "#00ff00",
                            color: "#fff",
                            padding: "15px 30px",
                            borderRadius: "10px",
                            marginTop: "20px",
                        }}
                    >
                        Click Me Now
                    </button>
                    <div style={{ marginTop: "20px" }}>
                        <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
                            Current Count: {count}
                        </p>
                        <button
                            onClick={handleIncrement}
                            style={{
                                backgroundColor: "#ff0000",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                marginRight: "10px",
                            }}
                        >
                            Increment
                        </button>
                        <button
                            onClick={handleDecrement}
                            style={{
                                backgroundColor: "#0000ff",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "5px",
                            }}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtraPage3;
