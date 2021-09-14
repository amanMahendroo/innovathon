import Nav from "./components/nav"
import Main from "./components/main"
import About from "./components/about"
import Themes from "./components/themes"
import Timeline from "./components/timeline"
import Org from "./components/org"
import Faq from "./components/faq"
import End from "./components/end"
import "./assets/css/globals.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About /> 
      <Themes />
      <Timeline />
      <Faq />
      <Org />
      <End />
    </div>
  );
}

export default App;
