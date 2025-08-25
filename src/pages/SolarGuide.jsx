import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Sun, Zap, DollarSign, Leaf, Calculator, Users, Award, ArrowRight } from "lucide-react";

const SolarGuide = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce electricity bills by 70-90% with solar energy",
      details: "Solar panels can significantly reduce your monthly electricity costs, with payback periods typically ranging from 3-7 years."
    },
    {
      icon: Leaf,
      title: "Environmental Impact", 
      description: "Reduce carbon footprint and contribute to a cleaner planet",
      details: "Each kW of solar capacity prevents 1,500 kg of CO2 emissions annually, equivalent to planting 18 trees."
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description: "Generate your own clean electricity and reduce grid dependency", 
      details: "Solar systems provide energy security and protection against rising electricity tariffs."
    },
    {
      icon: Award,
      title: "Government Incentives",
      description: "Benefit from subsidies and tax benefits for solar installations",
      details: "Central and state government schemes offer up to 40% subsidy for residential solar installations."
    },
  ];

  const process = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Our experts visit your location to analyze roof condition, orientation, and shading patterns.",
      duration: "1-2 days"
    },
    {
      step: 2, 
      title: "System Design",
      description: "Custom solar system design based on your energy needs and roof specifications.",
      duration: "3-5 days"
    },
    {
      step: 3,
      title: "Approvals & Permits",
      description: "We handle all documentation, permits, and utility approvals for seamless installation.",
      duration: "7-15 days"
    },
    {
      step: 4,
      title: "Installation", 
      description: "Professional installation by certified technicians with quality materials.",
      duration: "2-5 days"
    },
    {
      step: 5,
      title: "Commissioning",
      description: "System testing, grid connection, and net metering setup for optimal performance.",
      duration: "1-2 days"
    },
    {
      step: 6,
      title: "Monitoring & Maintenance",
      description: "Ongoing performance monitoring and regular maintenance for maximum efficiency.",
      duration: "Lifetime"
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-primary border-primary mb-6">
              Solar Energy Guide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-solar">
              Complete Guide to Solar Energy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about solar energy, from basics to installation. 
              Make informed decisions about your solar journey with our comprehensive guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solar" size="lg" className="shadow-solar">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Savings
              </Button>
              <Button variant="eco" size="lg" className="shadow-eco">
                Get Expert Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Why Choose Solar Energy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the compelling benefits of switching to solar energy for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-solar transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-2">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <p className="text-sm text-muted-foreground">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Solar Installation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures hassle-free solar installation from consultation to commissioning.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-solar rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {step.step}
                  </div>
                </div>
                <Card className="flex-1 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <Badge variant="outline" className="w-fit">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="mt-4">
                      <Progress value={(step.step / process.length) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarGuide;