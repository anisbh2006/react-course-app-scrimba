import reactLogo from "../assets/react.svg"

export default function Navbar() {
    return (
        <header className="navbar">
            <img className="navbar-logo" src={reactLogo} alt="React logo" />
            <span className="navbar-title">ReactFacts</span>
        </header>
    )
}
