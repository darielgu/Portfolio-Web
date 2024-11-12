import styles from "./DarielStyles.module.css";
import darielpng from "../../assets/jpeg-transformed.png";
import themeIcon from "../../assets/sun.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from "/src/common/ThemeContect.jsx";
function Dariel() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="Dariel" className={styles.Container}>
      <div className={styles.colorModeContainer}>
        <img
          src={darielpng}
          alt="Dariel Profile Picture"
          className={styles.pfp}
        />
        <img
          src={themeIcon}
          alt="Color Mode Icon"
          className={styles.colorMode}
        />
      </div>
      <div className={styles.info}>
        <h1>Dariel</h1>
        <br />
        <h1>Gutierrez</h1>
        <h2>Computer Science Student</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/dariel-gutierrez-a34057283/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn-Icon" />
          </a>
          <a href="https://www.github.com/darielgu" target="_blank">
            <img src={githubIcon} alt="github-Icon" />
          </a>
        </span>
        <p>
          I am an aspiring Full-Stack Developer with a passion for technology. I
          am in my second year of my Bachelor's degree in Computer Science at
          San Diego State University. I have experience working with JavaScript,
          React, Python, C++, Java, Node.js, Express, and MongoDB. Feel free to
          reach out to me on LinkedIn or through email!
        </p>
        <a href={CV} download>
          <button className="hover">View CV</button>
        </a>
      </div>
    </section>
  );
}

export default Dariel;
