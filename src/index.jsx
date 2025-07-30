import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./assets/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
