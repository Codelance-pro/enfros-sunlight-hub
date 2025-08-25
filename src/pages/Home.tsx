import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Users, Award, Leaf, Sun, TrendingUp } from "lucide-react";
import SolarCalculator from "@/components/SolarCalculator";
import heroImage from "@/assets/hero-solar.jpg";

const Home = () => {
  const stats = [
    { icon: Zap, value: "700+", label: "MW Completed", color: "text-primary" },
    { icon: Users, value: "1000+", label: "Happy Customers", color: "text-secondary" },
    { icon: Award, value: "12+", label: "Years Experience", color: "text-primary" },
    { icon: Leaf, value: "50M+", label: "CO₂ Saved (kg)", color: "text-secondary" },
  ];

  const services = [
    {
      title: "Rooftop Solar",
      description: "Complete rooftop solar solutions for homes and businesses",
      features: ["Site Assessment", "Custom Design", "Installation", "Maintenance"]
    },
    {
      title: "Commercial Solar",
      description: "Large-scale solar projects for industries and enterprises",
      features: ["Utility Scale", "Grid Integration", "Project Management", "Performance Monitoring"]
    },
    {
      title: "Solar Consulting",
      description: "Expert consultation for optimal solar energy solutions",
      features: ["Energy Audit", "Financial Analysis", "Regulatory Support", "Technical Guidance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 fade-in-up">
            <Badge variant="secondary" className="bg-gradient-eco text-secondary-foreground mb-4">
              Welcome to Solar Revolution
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text-solar">ENFROS</span> India
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold gradient-text-eco">
              Go Green - Go Clean
            </p>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading solar power plant construction company with 700+ MW completed projects. 
              Transform your energy future with sustainable solar solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <Button variant="solar" size="lg" className="shadow-solar">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/solar-guide">
                <Button variant="hero" size="lg" className="shadow-elegant">
                  Learn About Solar
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-2">
                  <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="space-y-2">
                <Badge variant="outline" className="text-secondary border-secondary">
                  About Enfros
                </Badge>
                <h2 className="text-4xl font-bold gradient-text-solar">
                  Powering India's Solar Future
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Enfros was established in 2012 in Chennai, Tamil Nadu, with a vision to develop 
                solar as a sustainable energy alternative in India. Our energy solutions are 
                viable both in the near term and long term, providing maximum energy efficiency.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                  <p>Specialized team of engineers with 10+ years solar experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                  <p>End-to-end services from design to installation and maintenance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1" />
                  <p>Access to best quality, most efficient and cost-effective equipment</p>
                </div>
              </div>

              <Link to="/about">
                <Button variant="eco" size="lg" className="shadow-eco">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative fade-in-up">
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-elegant">
                  <CardContent className="p-6 text-center">
                    <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Solar Design</h3>
                    <p className="text-sm text-muted-foreground">Custom solar solutions tailored to your needs</p>
                  </CardContent>
                </Card>
                <Card className="shadow-elegant mt-8">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Maximum ROI</h3>
                    <p className="text-sm text-muted-foreground">Optimize your investment with our expertise</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="outline" className="text-primary border-primary mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ENFROS provides end-to-end services to design the most suitable and optimal solar solution for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-solar transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="solar" size="lg" className="shadow-solar">
                View Our Projects
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <SolarCalculator />
    </div>
  );
};

export default Home;