import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      projectType: "",
      message: "",
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Office",
      details: ["Chennai, Tamil Nadu, India", "600001"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email Addresses", 
      details: ["info@enfrosindia.com", "projects@enfrosindia.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "text-secondary"
    },
  ];

  const services = [
    {
      icon: Users,
      title: "Free Consultation",
      description: "Get expert advice on solar solutions tailored to your needs",
      action: "Schedule Call"
    },
    {
      icon: Calendar,
      title: "Site Assessment",
      description: "Comprehensive on-site evaluation for optimal system design",
      action: "Book Assessment"
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Ongoing support for existing customers and installations",
      action: "Get Support"
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-primary border-primary mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-solar">
              Contact Enfros Solar
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to start your solar journey? Our team of experts is here to help you 
              design and install the perfect solar solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="solar" size="lg" className="shadow-solar">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91 98765 43210
              </Button>
              <Button variant="eco" size="lg" className="shadow-eco">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="fade-in-up">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text-solar">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-type">Project Type</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Solar</SelectItem>
                            <SelectItem value="commercial">Commercial Solar</SelectItem>
                            <SelectItem value="industrial">Industrial Solar</SelectItem>
                            <SelectItem value="agriculture">Agriculture Solar</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your solar project requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="solar" size="lg" className="w-full shadow-solar">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 fade-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text-solar">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you harness the power of solar energy. Reach out to our 
                  expert team for personalized solar solutions.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className={`h-6 w-6 ${info.color} mt-1`} />
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our range of services designed to support you throughout your solar journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-eco transition-all duration-300 text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Chennai, our office is easily accessible for consultations and meetings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto fade-in-up">
            <Card className="shadow-elegant overflow-hidden">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Enfros India</h3>
                  <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  <Button variant="eco" size="sm" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-solar text-primary-foreground">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards energy independence with Enfros Solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-elegant">
              <Phone className="h-5 w-5 mr-2" />
              Call for Free Quote
            </Button>
            <Button variant="hero" size="lg" className="shadow-elegant">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;