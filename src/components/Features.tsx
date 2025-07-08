import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Image, TrendingUp, Users, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Relationship Timeline",
    description: "Chronicle your romantic journey with detailed entries for each relationship, including start dates, end dates, and the story behind each connection.",
    gradient: "bg-gradient-to-br from-blush/20 to-primary/30"
  },
  {
    icon: <Image className="h-8 w-8" />,
    title: "Memory Gallery",
    description: "Upload photos linked to specific relationships in an Instagram-style grid. Each image tells a story and preserves precious moments.",
    gradient: "bg-gradient-to-br from-mint/20 to-secondary/30"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Growth Analytics",
    description: "Track your emotional growth with auto-generated insights about relationship patterns, communication improvements, and personal development.",
    gradient: "bg-gradient-to-br from-lavender/20 to-accent/30"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Endorsements",
    description: "Get endorsed by friends and exes for traits like 'Great Listener' or 'Emotionally Supportive'. Build credibility in your love life resume.",
    gradient: "bg-gradient-to-br from-primary/20 to-blush/30"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Privacy Controls",
    description: "Control who sees what with granular privacy settings. Keep some stories private, share others with friends, or make your whole profile public.",
    gradient: "bg-gradient-to-br from-secondary/20 to-mint/30"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Authentic Stories",
    description: "Share genuine experiences, lessons learned, and moments of vulnerability. This isn't about perfection—it's about real human connection.",
    gradient: "bg-gradient-to-br from-accent/20 to-lavender/30"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Love Life, Professionally Organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlinkd gives you the tools to document, reflect on, and celebrate your relationship journey 
            with the same professionalism you'd bring to your career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 bg-gradient-card overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Your Relationship Resume?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of people who are taking their love lives seriously. 
              It's time to give your relationships the professional treatment they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-soft">
                Start Your Journey
              </button>
              <button className="text-primary hover:text-primary/80 font-medium transition-colors px-8 py-4">
                See Example Profiles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;