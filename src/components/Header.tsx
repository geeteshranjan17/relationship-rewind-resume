import { Button } from "@/components/ui/button";
import { Heart, Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Unlinkd</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Explore Profiles
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Success Stories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="hover:scale-105">
              <User className="mr-2 h-4 w-4" />
              Log In
            </Button>
            <Button variant="hero" className="hover:scale-105">
              <Heart className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Explore Profiles
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Success Stories
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
              <Button variant="ghost" className="justify-start">
                <User className="mr-2 h-4 w-4" />
                Log In
              </Button>
              <Button variant="hero" className="justify-start">
                <Heart className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;