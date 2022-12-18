import "./App.css";
import Header from "./header/header";
import Hero from "./main/hero/hero";
import Portfolio from "./main/portfolio/portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
