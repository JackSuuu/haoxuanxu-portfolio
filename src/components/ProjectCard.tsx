
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group opacity-0 relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
        "lg:even:translate-y-12"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500",
          isHovered ? "opacity-100" : "group-hover:opacity-60"
        )}></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 translate-y-0 group-hover:translate-y-0">
        <div className="space-y-2">
          <span className="text-xs inline-block px-2 py-1 bg-white/10 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-medium">{project.title}</h3>
          <p className={cn(
            "text-sm text-white/80 max-w-md transition-all duration-500",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
          )}>
            {project.description}
          </p>
        </div>
      </div>
      
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 transform translate-y-4 transition-all duration-500",
            isHovered ? "opacity-100 translate-y-0" : "group-hover:opacity-100 group-hover:translate-y-0"
          )}
        >
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
            className="text-white"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
