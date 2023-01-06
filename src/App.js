import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import Contact from "./main/contact/contact";
import Hero from "./main/hero/hero";
import Portfolio from "./main/portfolio/portfolio";
import Skills from "./main/skills/skills";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
