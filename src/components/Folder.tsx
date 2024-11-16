import {
  VscFolder,
  VscFile,
  VscNewFolder,
  VscNewFile,
  VscEdit,
  VscTrash,
  VscSearch,
} from "react-icons/vsc";

const Folder = () => {
  return (
    <div>
      <div className="folder" style={{ cursor: "pointer" }}>
        <span>
          <VscSearch />
          <input type="text" />
        </span>

        <div className="buttons-container">
          <button>
            <VscTrash />
          </button>
          <button>
            <VscEdit />
          </button>
          <button>
            <VscNewFolder />
          </button>
          <button>
            <VscNewFile />
          </button>
        </div>
      </div>
      <div id="folderContainer" style={{ display: "none", marginLeft: 20 }}>
        <div className="addItem">
          <span>
            <VscFolder /> : <VscFile />
          </span>
          <input type="text" autoFocus />
        </div>
      </div>
    </div>
  );
};

export default Folder;
