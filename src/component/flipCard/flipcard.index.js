import React, { useState, useEffect, useRef } from "react";
import "./flipcard.syles.scss";

export default function FlipCard() {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const [width, setWidth] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  const setMaxHeight = () => {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  };

  const setMaxWidth = () => {
    const frontWidth = frontEl.current.getBoundingClientRect().width;
    const backWidth = backEl.current.getBoundingClientRect().width;
    setWidth(Math.max(frontWidth, backWidth, 100));
  };

  useEffect(() => {
    setMaxWidth();
    setMaxHeight();
  }, [frontEl, backEl]);

  return (
    <React.Fragment>
      <div
        style={{ height: height, width: width }}
        onClick={() => setFlip(!flip)}
        className={`card ${flip ? "card_flip" : ""}`}
      >
        <div className="front" ref={frontEl}>
          Front Side
        </div>
        <div className="back" ref={backEl}>
          You are seeing now is a Back Side
        </div>
      </div>
    </React.Fragment>
  );
}
