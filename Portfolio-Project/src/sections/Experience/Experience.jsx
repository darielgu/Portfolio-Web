import styles from "./ExperienceStyles.module.css";
import belto from "../../assets/beltoworld.png";
function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.ExperienceContainer}>
        <a href="https://belto.world">
          <img src={belto} alt="belto profile"></img>
        </a>
        <h3> Belto Ai Startup Backend Engineer Intern</h3>
        <p>
          Worked on the backend of the Belto Ai startup, using Node.js, Express,
          and MongoDB. I also worked on the frontend using React.js. I was
          responsible for the development of the API and the integration of the
          frontend with the backend.
        </p>
        <ul>
          Technologies Used
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React.js</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
