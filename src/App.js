import Navigation from "./components/navigation";
import AboutMe from "./components/aboutme";
import WhatIDo from "./components/whatido";
import RecentWorks from "./components/recentworks";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Resume from "./components/resume";
import "./css/style.css"

function App() {
  return (
    <div className="App bg-dark" style={{height:'100%', fontFamily:""}}>
      <div className = "app-container" style={{margin:"0 auto", fontFamily:""}}>
        <Navigation />
        <AboutMe />
        <hr style={{border: "5px dotted grey"}}></hr>
        <WhatIDo />
        <hr style={{border: "5px dotted grey"}}></hr>
        <RecentWorks/>
        <hr style={{border: "5px dotted grey"}}></hr>
        <Resume />
        <hr style={{border: "5px dotted grey"}}></hr>
        <Contact />
        <hr style={{border: "5px dotted grey"}}></hr>
        <Footer />
      </div>
    </div>
  );
}

export default App;
