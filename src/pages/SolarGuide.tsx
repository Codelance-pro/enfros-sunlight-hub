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

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Typical savings range from 70-90% on electricity bills. A 5kW system can save ₹50,000-80,000 annually depending on your current consumption and local electricity rates."
    },
    {
      question: "What is the lifespan of solar panels?",
      answer: "Quality solar panels come with 25-year performance warranties and can generate electricity for 30+ years with proper maintenance. Most systems pay for themselves within 3-7 years."
    },
    {
      question: "Do solar panels work during cloudy weather?",
      answer: "Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency (10-25% of peak capacity). They also generate power from indirect sunlight."
    },
    {
      question: "What maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance - mainly periodic cleaning and annual inspections. Most systems come with 5-10 year comprehensive maintenance packages."
    },
    {
      question: "Can I expand my solar system later?",
      answer: "Yes, solar systems are modular and can be expanded. However, it's more cost-effective to install the optimal size initially based on your energy requirements."
    },
    {
      question: "What happens during power outages?",
      answer: "Grid-tied systems shut down during outages for safety. Systems with battery backup can provide power during outages, while off-grid systems operate independently."
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

      {/* Educational Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Learn About Solar Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding solar technology helps you make better decisions about your energy future.
            </p>
          </div>

          <Tabs defaultValue="basics" className="max-w-6xl mx-auto fade-in-up">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="basics">Solar Basics</TabsTrigger>
              <TabsTrigger value="types">System Types</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="financing">Financing</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-primary" />
                      How Solar Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Solar panels convert sunlight into electricity using photovoltaic cells. When sunlight hits the panels, 
                      electrons in the silicon cells are knocked loose, creating an electric current.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Photovoltaic effect converts sunlight to DC electricity</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Inverter converts DC to AC electricity for home use</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Excess electricity fed back to grid via net metering</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Energy Production
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Solar panel output depends on factors like location, orientation, tilt angle, and weather conditions. 
                      In India, 1kW typically generates 4-5 units per day.
                    </p>
                    <div className="bg-gradient-hero p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Typical Daily Generation (per kW)</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>North India: 4.5-5.5 units</div>
                        <div>South India: 4.0-5.0 units</div>
                        <div>West India: 4.5-5.5 units</div>
                        <div>East India: 3.5-4.5 units</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="types" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Grid-Tied System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Connected to the electricity grid, allows selling excess power back through net metering.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Lower initial cost</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Net metering benefits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">No power during outages</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Hybrid System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Combines grid connection with battery backup for power during outages.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Power during outages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Grid benefits available</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Higher initial investment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Off-Grid System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Standalone system with battery storage, independent of electricity grid.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Complete energy independence</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Remote area installation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Highest initial cost</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="components" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Key Components</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Solar Panels</h4>
                        <p className="text-sm text-muted-foreground">Monocrystalline, polycrystalline, or thin-film options</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Inverter</h4>
                        <p className="text-sm text-muted-foreground">String, power optimizers, or microinverter technology</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Mounting System</h4>
                        <p className="text-sm text-muted-foreground">Roof-mounted or ground-mounted structure</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Monitoring System</h4>
                        <p className="text-sm text-muted-foreground">Real-time performance tracking and alerts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Quality Standards</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We use only certified components meeting international quality standards.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">IEC certified solar panels</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">MNRE approved inverters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">25-year panel warranty</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">5-year system warranty</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financing" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Financing Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Solar Loans</h4>
                        <p className="text-sm text-muted-foreground">Low-interest loans from banks and NBFCs</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Government Subsidy</h4>
                        <p className="text-sm text-muted-foreground">Up to 40% subsidy for residential installations</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Tax Benefits</h4>
                        <p className="text-sm text-muted-foreground">Accelerated depreciation for commercial systems</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Zero Down Payment</h4>
                        <p className="text-sm text-muted-foreground">Flexible payment plans available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Return on Investment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Typical solar installations provide excellent returns with short payback periods.
                    </p>
                    <div className="bg-gradient-hero p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Typical ROI Metrics</h4>
                      <div className="space-y-1 text-sm">
                        <div>Payback Period: 3-7 years</div>
                        <div>Annual Returns: 15-25%</div>
                        <div>25-year Savings: ₹15-40 lakhs</div>
                        <div>IRR: 18-30%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about solar energy and installations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 fade-in-up">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-solar text-primary-foreground">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and custom solar design for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-elegant">
              <Users className="h-5 w-5 mr-2" />
              Free Consultation
            </Button>
            <Button variant="hero" size="lg" className="shadow-elegant">
              Calculate Savings
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarGuide;