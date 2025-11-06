import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Award, Lightbulb, Zap, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To significantly address problems associated with power obtained from non-renewable sources through innovative solar solutions.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision", 
      description: "To become the leading service provider in the solar power plant industry across India and beyond.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Quality, sustainability, innovation, and customer satisfaction drive everything we do at dribble.",
    },
  ];

  const team = [
    {
      name: "Engineering Team",
      role: "Solar Specialists",
      description: "Our team of qualified engineers brings decades of combined experience in solar technology and power plant construction.",
    },
    {
      name: "Technical Ground Staff", 
      role: "Installation Experts",
      description: "Experienced professionals who have been working on solar technology for over 10 years across various sectors.",
    },
    {
      name: "Project Managers",
      role: "Execution Leaders", 
      description: "Ensuring seamless project delivery from initial consultation to final commissioning and beyond.",
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-secondary border-secondary mb-6">
              About dribble India
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-solar">
              Pioneering Solar Excellence Since 2012
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We strongly believe in the sun's potential to significantly address the problems 
              associated with power obtained from non-renewable sources of energy. It is with 
              this passion that we aim to work and provide solar solutions to our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-lg">
                <Zap className="h-6 w-6 text-primary" />
                <span className="font-semibold">700+ MW Completed</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <Users className="h-6 w-6 text-secondary" />
                <span className="font-semibold">1000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">12+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <h2 className="text-4xl font-bold gradient-text-solar">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                dribble was set up in 2012 in India with our corporate office in Chennai, Tamil Nadu, 
                with a focus on developing Solar as sustainable energy alternative in India. Our energy 
                solutions are viable both in the near term and over the longer term providing maximum energy.
              </p>
              <p className="text-lg text-muted-foreground">
                Quality has always been of utmost priority for us, and with this drive we challenge 
                ourselves to provide the same in the most cost effective manner. We completed construction 
                of more than 700 MW (CIVIL & ELECTRICAL Projects in I&C) and the company's target is to 
                become LEADING SERVICE PROVIDER in solar power plant industry.
              </p>
              <div className="bg-gradient-hero p-6 rounded-lg">
                <blockquote className="text-lg font-medium italic text-center">
                  "We are the Team of Engineers, specialized in Solar Power Plant Construction."
                </blockquote>
              </div>
            </div>
            
            <div className="space-y-6 fade-in-up">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Leaf className="h-8 w-8 text-secondary" />
                    <div>
                      <h3 className="text-lg font-semibold">Sustainability Focus</h3>
                      <p className="text-muted-foreground">Environmental responsibility at our core</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Every project we undertake contributes to reducing carbon footprint and 
                    creating a sustainable future for generations to come.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Quality Assurance</h3>
                      <p className="text-muted-foreground">Premium equipment and expert installation</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We have access to the best quality, most efficient and cost effective 
                    equipment from the best suppliers in the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in solar energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-eco transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional solar solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="shadow-elegant fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.role}</Badge>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-hero p-8 rounded-lg text-center fade-in-up">
            <h3 className="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Industries", "Hospitals", "Hotels", "Cold Storage", "Residential", "Commercial", "Utility Scale", "Grid Integration"].map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-solar text-primary-foreground">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
          <Button variant="hero" size="lg" className="shadow-elegant">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;