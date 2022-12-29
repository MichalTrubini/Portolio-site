import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import About from "./main/about/about";
import Contact from "./main/contact/contact";
import Hero from "./main/hero/hero";
import Portfolio from "./main/portfolio/portfolio";

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
