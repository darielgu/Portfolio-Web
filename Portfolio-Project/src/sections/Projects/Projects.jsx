import styles from "./ProjectsStyles.module.css";
import circular from "../../assets/circular.png";
import ProjectCard from "../../common/ProjectCard";
import bdt from "../../assets/BDT.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={circular}
          link="https://github.com/darielgu/Program1/tree/main/Gutierrez_Dariel.zip"
          h3="Monopoly Linked List"
          p="Monopoly board game implemented in C++ using a circular linked list."
        />
        <ProjectCard
          src={bdt}
          link="https://github.com/darielgu/Program-2"
          h3="Role Play Game"
          p="Role play game implemented in C++ using a binary search tree and using io file streaming."
        />
      </div>
    </section>
  );
}

export default Projects;
