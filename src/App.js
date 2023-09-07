import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container mt-md-5 appWrapper">
        <Weather />
      </div>

      <footer className="text-center">
        Coded with <span className="emojiColor">♥️</span> by{" "}
        <a href="https://monumental-malasada-41cd9f.netlify.app">
          Mariama Touray
        </a>{" "}
        and is{" "}
        <a href="https://github.com/touraymk/skycast-react-app">open-sourced</a>
      </footer>
    </div>
  );
}

export default App;
