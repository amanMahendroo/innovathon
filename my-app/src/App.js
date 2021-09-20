import Nav from "./components/nav"
import Main from "./components/main"
import About from "./components/about"
import Themes from "./components/themes"
import Schedule from "./components/schedule"
import Org from "./components/org"
import Faq from "./components/faq"
import Sponsor from './components/sponsor'
import End from "./components/end"
import Loading from './components/loading'
import Canvas from "./components/canvas"
import { useState } from "react"
import "./assets/css/globals.css"

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 150000);


  return (
    <div className="App">
      {loading ? <Loading/> : <><Canvas />
      <Nav />
      <Main />
      <About /> 
      <Themes />
      <Schedule />
      <Faq />
      <Sponsor/>
      <Org />
      <End /></>}
    </div>
  );
}

export default App;
