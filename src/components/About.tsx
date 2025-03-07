
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
          } else if (entry.target === contentRef.current) {
            entry.target.classList.add('animate-fade-in');
          }
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-secondary/30"
    >
      <div className="container max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest uppercase bg-secondary rounded-full">
          About Me
        </span>
        
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-medium tracking-tight mb-12 opacity-0"
        >
          Passionate about creating
          <br />
          meaningful experiences.
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 opacity-0 animation-delay-300"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Design Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe that design should be both beautiful and functional. My approach combines minimalism with user-centric thinking to create experiences that resonate with users on a fundamental level.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Development Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              With a focus on modern front-end technologies, I build responsive, performant websites and applications. I'm committed to clean code, accessibility, and creating solutions that scale.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Collaborative Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              I approach each project as a partnership, working closely with clients to understand their goals and transform them into compelling digital experiences that drive results.
            </p>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 opacity-0 animate-fade-in animation-delay-500">
            <h3 className="text-2xl font-medium">Skills & Expertise</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">UI/UX Design</h4>
                  <span className="text-xs text-muted-foreground">95%</span>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[95%] rounded-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Front-end Development</h4>
                  <span className="text-xs text-muted-foreground">90%</span>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%] rounded-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">React & TypeScript</h4>
                  <span className="text-xs text-muted-foreground">85%</span>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Responsive Design</h4>
                  <span className="text-xs text-muted-foreground">98%</span>
                </div>
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%] rounded-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 opacity-0 animate-fade-in animation-delay-700">
            <h3 className="text-2xl font-medium">Education & Experience</h3>
            
            <div className="space-y-6">
              <div className="space-y-2 p-4 border border-border rounded-lg bg-glass-gradient backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">Senior UI/UX Designer</h4>
                  <span className="text-xs text-muted-foreground">2020 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Leading design initiatives for digital products and creating cohesive user experiences across multiple platforms.</p>
              </div>
              
              <div className="space-y-2 p-4 border border-border rounded-lg bg-glass-gradient backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">Front-end Developer</h4>
                  <span className="text-xs text-muted-foreground">2018 - 2020</span>
                </div>
                <p className="text-sm text-muted-foreground">Developed responsive and performant web applications using modern JavaScript frameworks and best practices.</p>
              </div>
              
              <div className="space-y-2 p-4 border border-border rounded-lg bg-glass-gradient backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">Bachelor's Degree in Design</h4>
                  <span className="text-xs text-muted-foreground">2014 - 2018</span>
                </div>
                <p className="text-sm text-muted-foreground">Studied human-centered design principles, interaction design, and visual communication. Graduated with honors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
