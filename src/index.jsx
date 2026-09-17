import { createRoot } from "react-dom/client"
import Main from "./components/main"
import Navbar from "./components/navbar"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <>
        <Navbar />
        <Main />
    </>
)