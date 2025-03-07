
import { useRef, useEffect } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Minimalist E-commerce Platform",
    category: "Web Design",
    description: "A clean, modern e-commerce platform with intuitive navigation and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Finance Dashboard Interface",
    category: "UI/UX Design",
    description: "A comprehensive financial dashboard with data visualization and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Travel Photography Portfolio",
    category: "Photography",
    description: "A stunning portfolio showcasing travel photography from around the world with immersive experiences.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Health & Wellness App",
    category: "Mobile Design",
    description: "A wellness application designed to help users track fitness progress and maintain healthy habits.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            entry.target.classList.add('animate-fade-in-up');
          }
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest uppercase bg-secondary rounded-full">
          My Work
        </span>
        
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-medium tracking-tight mb-12 opacity-0"
        >
          Selected projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in animation-delay-1000">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-secondary hover:bg-secondary/80 transition-colors duration-300"
          >
            <span className="text-sm font-medium mr-2">View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
