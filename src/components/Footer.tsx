import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Unlinkd</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The professional social network for your unprofessional life. 
              Document, celebrate, and learn from your relationship journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-primary/10 p-2 rounded-lg text-primary hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-lg text-primary hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-lg text-primary hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Explore Profiles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Unlinkd. All rights reserved. Taking love lives seriously since day one.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;