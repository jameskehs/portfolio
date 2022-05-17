import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <div id="container">
      <div id="main">
        <div className="main-header">
          <span className="red-text">
            <h1>Contact Me</h1>
          </span>
          <p>Feel free to reach out!</p>
        </div>
        <div className="main-content">
          <div>
            <a href="mailto:jamesekehs@gmail.com">
              <EmailIcon />
              <p>jamesekehs@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/jameskehs/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
