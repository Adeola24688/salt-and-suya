const PROJECTS = [
  {
    name: "Courtyard House", type: "Private residence · Lagos", year: "2025", label: "Residential",
    image: "photo-1600607687920-4e2a09cf159d", alt: "Quiet modern residence with warm timber and a planted courtyard",
  },
  {
    name: "Common Ground", type: "Community workspace · Accra", year: "2024", label: "Workplace",
    image: "photo-1600210492486-724fe5c67fb0", alt: "Light-filled shared interior with natural materials and generous seating",
  },
  {
    name: "The Long Table", type: "Guesthouse & kitchen · Abeokuta", year: "2023", label: "Hospitality",
    image: "photo-1600566753086-00f18fb6b3ea", alt: "Textured contemporary interior looking out toward tropical greenery",
  },
];

export default function Menu() {
  return (
    <section className="work-section shell" id="work">
      <div className="section-topline">
        <div><p className="eyebrow">01 / Selected work</p><h2>Built around life.</h2></div>
        <span className="section-count">2023 — 2025&nbsp; / &nbsp;03 projects</span>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <article className="project" key={project.name}>
            <div className="project-image">
              <img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1400&q=85`} alt={project.alt} loading="lazy" />
              <span className="project-tag">{project.label}</span>
            </div>
            <div className="project-caption">
              <div><h3>{project.name}</h3><p>{project.type}</p></div>
              <span className="project-meta">0{index + 1} / {project.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
