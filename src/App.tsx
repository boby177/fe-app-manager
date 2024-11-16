import "./App.css";
// import Folder from "./components/Folder.jsx";
import Folder from "./components/Folder";

function App() {
  return (
    <div className="App">
      <div className="folderContainerBody">
        <div className="folder-container">
          <Folder />
        </div>
        <div className="empty-state" />
      </div>
    </div>
  );
}

export default App;
