import { createRoot } from "react-dom/client"
import reactLogo from "./assets/react.svg"
import "./index.css"
const root = createRoot(document.getElementById("root"))

root.render(
    <TemporaryName />
)

function TemporaryName() {
    return (
        <main>
            <img src={reactLogo} width="40" alt="React logo" />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}