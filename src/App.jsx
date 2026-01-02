import React from "react";
import {About} from "./component/about/about";
import {Navbar} from "./component/navbar/navbar";
import {Work} from "./component/work/work";
import {Footer} from "./component/footer/footer";
import {Experience} from "./component/experience/experience";
import {Contact} from "./component/contact/contact";
import {Education} from "./component/education/education";
import {Skills} from "./component/skills/skills";
import {BlurBlob} from "./component/blurBlob.jsx";

const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{top: "15%", left: "10%"}}
        size={{width: "40%", height: "50%"}}
        color="purple"
        delay={0}
      />

      <BlurBlob
        position={{top: "70%", left: "80%"}}
        size={{width: "35%", height: "45%"}}
        color="pink"
        delay={2}
      />



      

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
