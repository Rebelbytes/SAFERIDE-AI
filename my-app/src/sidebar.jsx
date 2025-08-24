import React from "react";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column p-3 text-white bg-dark"
      style={{
        width: "280px",
        height: "100vh",
        position: "fixed",
        top: "70px", // below navbar
        left: 0,
        fontSize: "20px", // bigger text
        display: "flex",
        justifyContent: "center", // vertical centering
        alignItems: "center", // horizontal centering
      }}
    >
      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ width: "100%", gap: "15px", textAlign: "center" }}
      >
        {["Live Camera feed", "Violation Log", "E challan Management", "Report and analytics"].map(
          (item, index) => (
            <li key={index} className="nav-item">
              <a
                href="#"
                className="nav-link text-white d-flex justify-content-center"
                style={{
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                  padding: "10px 0",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0d6efd")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
