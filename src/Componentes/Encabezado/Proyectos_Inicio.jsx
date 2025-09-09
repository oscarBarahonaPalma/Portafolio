// src/components/Proyecto_Inicio.jsx
import { useState } from "react";
import { ShoppingCart, Code, Cloud, ExternalLink, Github } from "lucide-react";
import '../../Estilos/Proyectos_Inicio.css'

export default function Proyecto_Inicio() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Tienda Online",
      description: "Tienda online completa con carrito de compras, sistema de pagos integrado, gestión de inventario y dashboard administrativo. Incluye autenticación de usuarios y sistema de reseñas.",
      icon: <ShoppingCart size={40} />,
      image: "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=923&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      projectUrl: "https://tienda-two-rouge.vercel.app",
      githubUrl: "https://github.com/usuario/eshop",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      shadowColor: "rgba(102, 126, 234, 0.4)"
    },
    {
      id: 2,
      title: "Portafolio",
      description: "Portafolio interactivo y moderno que muestra mis proyectos, habilidades y experiencia como desarrollador frontend. Incluye animaciones, diseño responsive y navegación intuitiva.",
      icon: <Code size={40} />,
      image: "https://images.unsplash.com/photo-1615623705641-db34ad498cc5?q=80&w=940&auto=format&fit=crop",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      projectUrl: "https://portafolio-ivory-one-16.vercel.app",
      githubUrl: "https://github.com/usuario/portafolio",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      shadowColor: "rgba(240, 147, 251, 0.4)"
    },
    {
      id: 3,
      title: "Clima en Vivo",
      description: "Dashboard meteorológico interactivo con pronósticos detallados, mapas climáticos, alertas meteorológicas y análisis histórico. Datos en tiempo real de múltiples fuentes.",
      icon: <Cloud size={40} />,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox"],
      projectUrl: "https://app-clima-pi-blond.vercel.app",
      githubUrl: "https://github.com/usuario/weather-live",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      shadowColor: "rgba(79, 172, 254, 0.4)"
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="main-container">
      <div className="projects-container">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
            style={{ '--gradient': project.color, '--shadow-color': project.shadowColor }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleProjectClick(project.projectUrl)}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="gradient-overlay"></div>
              <div className="icon-container">{project.icon}</div>
            </div>

            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-container">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="button-container">
                <button
                  className="primary-button"
                  onClick={(e) => { e.stopPropagation(); handleProjectClick(project.projectUrl); }}
                >
                  <ExternalLink size={16} /> Ver Proyecto
                </button>
                <button
                  className="secondary-button"
                  onClick={(e) => { e.stopPropagation(); handleProjectClick(project.githubUrl); }}
                >
                  <Github size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}