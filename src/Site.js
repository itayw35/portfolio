import React from "react";

export default function Site(props) {
  return (
    <div className="site">
      <a className="link" href={props.link}>
        <img className="image" src={props.image} alt="img"></img>
        {props.name}
      </a>
    </div>
  );
}
