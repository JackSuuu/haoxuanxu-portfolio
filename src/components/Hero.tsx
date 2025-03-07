
import { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headingRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(headingRef.current);
      
      return () => {
        if (headingRef.current) {
          observer.unobserve(headingRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_40%)] z-0"></div>
      
      <div className="z-10 max-w-4xl mx-auto text-center">
        <span className="animate-fade-in inline-block px-3 py-1 mb-6 text-xs tracking-widest uppercase bg-secondary rounded-full">
          Portfolio
        </span>
        
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 transition-all duration-700 ease-out opacity-0 translate-y-4"
        >
          Hi, I am Haoxuan Xu. Shaping the world with better insights with me
        </h1>
        
        <p className="animate-fade-in animation-delay-500 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-8 text-balance">
          I'm a Student who study in the University of Edinburgh focused on crafting insights. I am passionate about helping the world that improves the lives of those around me.
        </p>
        
        <div className="animate-fade-in animation-delay-700 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollDown}
            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#f8fafc_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-2 text-sm font-medium backdrop-blur-3xl">
              Learn More
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-300"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in animation-delay-1000">
        <span className="mb-2 text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-[1px] h-10 bg-muted-foreground/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-foreground animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
