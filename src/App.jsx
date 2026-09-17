import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import Story from "./components/Story.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
