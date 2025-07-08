import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Smile, Award } from "lucide-react";

const testimonials = [
  {
    quote: "Endorsed for: crying at the right time",
    author: "Sarah M.",
    status: "Single & Thriving",
    endorsements: ["Emotional Intelligence", "Great Listener", "Genuine Tears"],
    icon: <Heart className="h-5 w-5" />,
  },
  {
    quote: "Certified in overthinking",
    author: "Jake T.",
    status: "Recovering Overthinker",
    endorsements: ["Deep Thinker", "Anxiety Management", "Self-Aware"],
    icon: <Smile className="h-5 w-5" />,
  },
  {
    quote: "My ex just endorsed me for emotional growth",
    author: "Alex K.",
    status: "Constantly Evolving",
    endorsements: ["Character Development", "Mature Communication", "Growth Mindset"],
    icon: <Award className="h-5 w-5" />,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Stories, Real Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our community is redefining what it means to be professionally unprofessional
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {testimonial.icon}
                  </div>
                  <Quote className="h-6 w-6 text-primary/60 mt-1" />
                </div>
                
                <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.status}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {testimonial.endorsements.map((endorsement, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {endorsement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to share your story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-soft">
              Start Your Resume
            </button>
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;