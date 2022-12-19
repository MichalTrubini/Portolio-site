import "./App.css";
import Header from "./header/header";
import Contact from "./main/contact/contact";
import Hero from "./main/hero/hero";
import Portfolio from "./main/portfolio/portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
