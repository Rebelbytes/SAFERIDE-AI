import Navbar from "./navbar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="main-content">
        <div className="upload-box">
          <button className="btn btn-primary">Upload Video</button>
        </div>
      </div>
    </div>
  );
}

export default App;
