import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Zap, Calendar, Users, Building, Factory, Home, Hospital } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Industrial Solar Plant - Coimbatore",
      category: "industrial",
      capacity: "50 MW",
      location: "Coimbatore, Tamil Nadu",
      year: "2023",
      type: "Ground Mount",
      client: "Manufacturing Unit",
      description: "Large-scale industrial solar installation powering manufacturing operations with clean energy.",
      icon: Factory,
      status: "Completed",
    },
    {
      id: 2,
      title: "Hospital Rooftop Solar - Chennai",
      category: "healthcare",
      capacity: "2.5 MW",
      location: "Chennai, Tamil Nadu", 
      year: "2023",
      type: "Rooftop",
      client: "Multi-Specialty Hospital",
      description: "Reliable solar power solution ensuring uninterrupted healthcare services.",
      icon: Hospital,
      status: "Completed",
    },
    {
      id: 3,
      title: "Commercial Complex - Bangalore",
      category: "commercial",
      capacity: "15 MW", 
      location: "Bangalore, Karnataka",
      year: "2023",
      type: "Rooftop + Ground",
      client: "IT Park",
      description: "Hybrid solar installation combining rooftop and ground-mounted systems for maximum efficiency.",
      icon: Building,
      status: "Completed",
    },
    {
      id: 4,
      title: "Residential Township - Hyderabad",
      category: "residential",
      capacity: "5 MW",
      location: "Hyderabad, Telangana",
      year: "2022", 
      type: "Community Solar",
      client: "Housing Development",
      description: "Community-wide solar solution providing clean energy to 500+ families.",
      icon: Home,
      status: "Completed",
    },
    {
      id: 5,
      title: "Cold Storage Facility - Pune",
      category: "industrial",
      capacity: "8 MW",
      location: "Pune, Maharashtra",
      year: "2022",
      type: "Rooftop",
      client: "Food Processing Unit",
      description: "Specialized solar installation designed for energy-intensive cold storage operations.",
      icon: Factory,
      status: "Completed",
    },
    {
      id: 6,
      title: "Hotel Chain Solar Project",
      category: "commercial", 
      capacity: "12 MW",
      location: "Multiple Locations",
      year: "2022",
      type: "Rooftop",
      client: "Hospitality Group", 
      description: "Multi-location solar deployment across hotel chain properties for sustainable hospitality.",
      icon: Building,
      status: "Completed",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "industrial", label: "Industrial", count: projects.filter(p => p.category === "industrial").length },
    { id: "commercial", label: "Commercial", count: projects.filter(p => p.category === "commercial").length },
    { id: "residential", label: "Residential", count: projects.filter(p => p.category === "residential").length },
    { id: "healthcare", label: "Healthcare", count: projects.filter(p => p.category === "healthcare").length },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const totalCapacity = projects.reduce((sum, project) => {
    return sum + parseFloat(project.capacity.replace(" MW", ""));
  }, 0);

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-primary border-primary mb-6">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-solar">
              Proven Solar Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our extensive portfolio of successful solar projects across industries, 
              from residential communities to large-scale industrial installations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalCapacity}+</div>
                <div className="text-muted-foreground">MW Installed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">{projects.length}+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">5</div>
                <div className="text-muted-foreground">States</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Project Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our diverse portfolio by project type to see how we've helped different sectors harness solar energy.
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="fade-in-up">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex flex-col gap-1">
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card 
                    key={project.id} 
                    className="shadow-elegant hover:shadow-solar transition-all duration-300 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <project.icon className="h-8 w-8 text-primary" />
                        <Badge 
                          variant="outline" 
                          className={project.status === "Completed" ? "text-secondary border-secondary" : ""}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="font-medium">{project.capacity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-secondary" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-secondary" />
                          <span className="truncate">{project.client}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Installation Type</span>
                          <Badge variant="outline" className="text-xs">{project.type}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Success Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key achievements and milestones from our solar project implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-elegant fade-in-up">
              <CardContent className="p-6 text-center">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Industrial Excellence</h3>
                <p className="text-3xl font-bold text-primary mb-2">58+ MW</p>
                <p className="text-muted-foreground">Installed across manufacturing and industrial facilities</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Commercial Impact</h3>
                <p className="text-3xl font-bold text-secondary mb-2">27+ MW</p>
                <p className="text-muted-foreground">Powering offices, hotels, and commercial complexes</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Solar</h3>
                <p className="text-3xl font-bold text-primary mb-2">5+ MW</p>
                <p className="text-muted-foreground">Bringing clean energy to residential communities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-eco text-secondary-foreground">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Solar Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing portfolio of successful solar installations across India.
          </p>
          <Button variant="hero" size="lg" className="shadow-elegant">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;