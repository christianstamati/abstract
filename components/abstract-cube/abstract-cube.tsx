"use client";

import "./abstract-cube.css";

export function AbstractCube() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
        <div
          className="cube-container"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "center center",
          }}
        >
          <div
            className="cube"
            style={{
              position: "relative",
              width: "400px",
              height: "400px",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateY(0deg) translateZ(200px)",
              }}
            />
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateY(180deg) translateZ(200px)",
              }}
            />
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateY(90deg) translateZ(200px)",
              }}
            />
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateY(-90deg) translateZ(200px)",
              }}
            />
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateX(90deg) translateZ(200px)",
              }}
            />
            <div
              className="cube-face"
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                border: "1px solid currentColor",
                background: "transparent",
                transform: "rotateX(-90deg) translateZ(200px)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
