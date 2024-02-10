import React from "react";
import { createRoot } from "react-dom/client";
import Timer from "./components/timer";

const test = (
  <div>
    <h1>TIMER</h1>
    <Timer />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
