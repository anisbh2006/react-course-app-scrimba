const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 200K stars on GitHub",
    "Is maintained by Meta",
    "Powers thousands of enterprise apps, including mobile apps",
]

export default function Main() {
    return (
        <main className="facts-main">
            <h1>Fun facts about React</h1>
            <ul className="facts-list">
                {facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </main>
    )
}
