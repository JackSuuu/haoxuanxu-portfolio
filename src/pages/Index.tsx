
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
      <footer className="py-12 px-6 md:px-12 border-t border-border bg-secondary/30">
        <div className="container max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Custom cursor element */}
      <div className="cursor-dot hidden md:block fixed w-4 h-4 rounded-full bg-background z-[100] pointer-events-none mix-blend-difference"></div>
      <div className="cursor-outline hidden md:block fixed w-8 h-8 rounded-full border border-background z-[99] pointer-events-none mix-blend-difference"></div>
      
      {/* Custom cursor script - simplified */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            
            if (cursorDot && cursorOutline) {
              window.addEventListener('mousemove', function(e) {
                const posX = e.clientX;
                const posY = e.clientY;
                
                cursorDot.style.left = \`\${posX}px\`;
                cursorDot.style.top = \`\${posY}px\`;
                
                cursorOutline.style.left = \`\${posX}px\`;
                cursorOutline.style.top = \`\${posY}px\`;
              });
            }
          });
        `
      }} />
    </main>
  );
};

export default Index;
