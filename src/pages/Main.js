import React, { useState } from "react";
import "../App.css";
import "../css/Main.css";
import { FaReact, FaDocker, FaGithub } from "react-icons/fa";

import { TourGuide } from "../components/TourSteps";

const Main = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="page-content">
      <TourGuide isOpen={isTourOpen} setOpen={setIsTourOpen} />
      <div>
        <h1>Welcome to BigDocker</h1>
        <br />
        <p>New to the app?</p>
        <button className="menuButton" onClick={setIsTourOpen.bind(null, true)}>
          Get Started
        </button>
      </div>
      <div className="poweredBy">
        Powered by
        <div className="iconHolder">
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaDocker size={64} color="DodgerBlue" />
            <p>Docker</p>
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaReact size={64} color="Cyan" />
            <p>React</p>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaGithub size={64} />
            <p>Github</p>
          </a>
          <a
            href="https://www.sagemath.org/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <img
              src="https://github.com/sagemath/website/blob/master/src/pix/icon_only/sagemath-icon-64.png?raw=true"
              alt="Sagemath"
            />
            <p>Sagemath</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
