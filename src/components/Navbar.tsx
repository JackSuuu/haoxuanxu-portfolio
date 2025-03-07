
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
        scrolled ? "glass border-b border-[rgba(255,255,255,0.1)]" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <a 
            href="#" 
            className="font-medium text-lg tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="opacity-0 animate-fade-in animation-delay-200">Portfolio</span>
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            {['about', 'projects'].map((item, index) => (
              <li 
                key={item}
                className={`opacity-0 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                onClick={() => scrollToSection(item)}
              >
                <span className="relative text-sm tracking-wide after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden flex items-center">
            <button 
              className="opacity-0 animate-fade-in animation-delay-500 rounded-full p-2 focus:outline-none hover:bg-secondary transition-colors duration-200"
              onClick={() => {
                const mobileNav = document.querySelector('.mobile-nav');
                mobileNav?.classList.toggle('translate-y-0');
                mobileNav?.classList.toggle('-translate-y-full');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className="mobile-nav fixed inset-0 bg-background -translate-y-full transition-transform duration-300 ease-in-out z-50 md:hidden">
        <div className="flex justify-end p-6">
          <button 
            className="rounded-full p-2 focus:outline-none hover:bg-secondary transition-colors duration-200"
            onClick={() => {
              const mobileNav = document.querySelector('.mobile-nav');
              mobileNav?.classList.toggle('translate-y-0');
              mobileNav?.classList.toggle('-translate-y-full');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['about', 'projects'].map((item) => (
            <button
              key={item}
              className="text-2xl font-medium tracking-tight"
              onClick={() => {
                scrollToSection(item);
                const mobileNav = document.querySelector('.mobile-nav');
                mobileNav?.classList.toggle('translate-y-0');
                mobileNav?.classList.toggle('-translate-y-full');
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
