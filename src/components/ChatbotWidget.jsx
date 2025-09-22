// src/components/ChatbotWidget.jsx
import React, { useState } from "react";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px", // ✅ yaha change karo agar left side chahiye
        zIndex: 9999,
      }}
    >
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "24px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          💬
        </button>
      )}

      {/* Iframe Chatbot */}
      {open && (
        <div
          style={{
            width: "350px",
            height: "500px",
            background: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {/* Close bar */}
          <div
            style={{
              background: "#2563eb",
              color: "white",
              padding: "6px 10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* iframe chatbot */}
          <iframe
            src="http://localhost:5174/"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            title="Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
