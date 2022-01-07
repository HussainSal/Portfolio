import React from "react";
import { useRef, useEffect } from "react";

function Cursor() {
  const mainCursor = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const mouseX = clientX - mainCursor.current.clientWidth / 2;
        const mouseY = clientY - mainCursor.current.clientHeight / 2;
        mainCursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
      });
    }, 500);
  }, []);

  return <div className="cursor" ref={mainCursor}></div>;
}

export default Cursor;
