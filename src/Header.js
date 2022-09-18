import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <p>Itay Weinberg - web developer</p>
      <div className="buttons">
        <button name="" onClick={props.setFilteredProjects}>
          All
        </button>
        <button name="js" onClick={props.filter}>
          JS
        </button>
        <button name="html" onClick={props.filter}>
          html
        </button>
        <button name="css" onClick={props.filter}>
          css
        </button>
        <button name="react" onClick={props.filter}>
          react
        </button>
        <button name="node.js" onClick={props.filter}>
          node.js
        </button>
        <button name="mongo" onClick={props.filter}>
          MongoDB
        </button>
      </div>
    </div>
  );
}
