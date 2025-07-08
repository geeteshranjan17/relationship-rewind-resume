import { Button } from "@/components/ui/button";
import { Heart, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Unlinkd
              </h1>
              <p className="text-xl lg:text-2xl font-medium opacity-90">
                "It's high time you take your unprofessional life professionally."
              </p>
              <p className="text-lg opacity-80 max-w-lg">
                The first social network for your relationship history. Build your love life resume, 
                showcase your emotional growth, and connect with others on their journey.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold px-8 py-6 text-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Create My Relationship Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-105 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Explore Other Profiles
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/80">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm">Join 10,000+ users</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-sm">100% authentic stories</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Two people sharing a genuine moment" 
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-soft">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">2.5k+</div>
                <div className="text-sm opacity-80">Success Stories</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-soft">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-80">Personal Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;