import "./App.css";
import Header from "./Header";
import Site from "./Site";
import spotitay from "./spotitay.png";
import drive from "./drive.png";
import memorygame from "./memory-game.png";
import tictactoe from "./tictactoe.png";
import { useState } from "react";

const projects = [
  {
    name: "spotitay",
    image: spotitay,
    link: "https://spotitay.netlify.app",
    tags: ["js", "react", "css", "node.js", "mongo"],
  },
  {
    name: "itay-drive",
    image: drive,
    link: "https://itay-drive.netlify.app",
    tags: ["js", "react", "css", "node.js"],
  },
  {
    name: "memory game",
    image: memorygame,
    link: "https://itayw35.github.io/project_memory/",
    tags: ["js", "html", "css"],
  },
  {
    name: "tic-tac-toe",
    image: tictactoe,
    link: "https://itayw35.github.io/TicTacToe",
    tags: ["js", "html", "css"],
  },
];
function App() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const filter = function (e) {
    setFilteredProjects(
      projects.filter((v) => {
        return v.tags.includes(e.target.name);
      })
    );
  };
  return (
    <>
      <Header
        filter={filter}
        setFilteredProjects={() => setFilteredProjects(projects)}
      />
      <div className="app-container">
        <div className="app">
          {filteredProjects.map((v) => {
            return <Site image={v.image} link={v.link} name={v.name} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
