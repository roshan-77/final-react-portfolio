import Navigation from "./portfolio-components/navigation";
import AboutMe from "./portfolio-components/aboutme";
import WhatIDo from "./portfolio-components/whatido";
import RecentWorks from "./portfolio-components/recentworks";
import Contact from "./portfolio-components/contact";
import Footer from "./portfolio-components/footer";
import Resume from "./portfolio-components/resume";
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
