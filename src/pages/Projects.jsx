import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const projects = [
    { title: "AI Model", description: "A machine learning demo project." },
    { title: "Flood Map", description: "Interactive risk map built with PHP & HTML." }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Projects</h1>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={index} title={p.title} description={p.description} />
        ))}
      </div>
    </div>
  );
}
