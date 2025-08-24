import React from "react";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "black",
          height: "70px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <span
          style={{
            color: "red",
            fontSize: "22px",
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          SafeRide - AI Enabled Smart Road Safety Violation Detection and Monitoring System Using Neural Vision
        </span>
      </nav>

      {/* Sidebar */}
      <Sidebar />

      
    </>
  );
};

export default Navbar;
