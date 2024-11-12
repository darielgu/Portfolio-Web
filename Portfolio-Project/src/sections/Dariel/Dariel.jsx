import styles from "./DarielStyles.module.css";
import darielpng from "../../assets/jpeg-transformed.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import LinkedInLight from "../../assets/linkedin-light.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg";
import GithubLight from "../../assets/github-light.svg";
import GithubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from "/src/common/ThemeContect.jsx";
function Dariel() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? LinkedInLight : LinkedInDark;
  const githubIcon = theme === "light" ? GithubLight : GithubDark;

  return (
    <section id="Dariel" className={styles.Container}>
      <div className={styles.colorModeContainer}>
        <img
          src={darielpng}
          alt="Dariel Profile Picture"
          className={styles.pfp}
        />
        <img
          onClick={toggleTheme}
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
