import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const AboutMe = () => {
  return (
    <div id="container">
      <div id="main">
        <div className="main-header">
          <h1>
            Hi, I'm <span className="red-text">James</span>
          </h1>
          <p>
            A <span className="red-text">fullstack web developer</span>
          </p>
        </div>
        <div className="main-content">
          <h3>
            Important <span className="red-text">Links</span>
          </h3>
          <div>
            <a href="https://github.com/jameskehs" target="_blank" rel="noreferrer">
              <GitHubIcon /> <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/jameskehs/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <p>LinkedIn</p>
            </a>
            <a href="./Downloads/Resume.pdf" download="JamesResume">
              <PictureAsPdfIcon />
              <p>PDF Resume</p>
            </a>
          </div>
        </div>
      </div>
      <div id="details">
        <h2>
          Take a look at my <span className="red-text">skills</span>
        </h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Rest APIs</li>
          <li>Node.js</li>
          <li>PSQL</li>
          <li>Express</li>
          <li>SASS</li>
          <li>Typescript</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
