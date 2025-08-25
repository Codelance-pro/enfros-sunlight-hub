import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight, Zap, Leaf, DollarSign } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Solar Energy Trends in India 2024: What's Driving the Growth",
    excerpt: "India's solar market is experiencing unprecedented growth. Explore the key factors driving adoption, government policies, and emerging technologies shaping the future of solar energy in India.",
    author: "Enfros Team",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/api/placeholder/800/400",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Complete Guide to Rooftop Solar Installation in Chennai",
      excerpt: "Everything you need to know about installing rooftop solar in Chennai - from permits to performance optimization in local climate conditions.",
      author: "Ravi Kumar",
      date: "March 10, 2024", 
      readTime: "6 min read",
      category: "Installation Guide",
      tags: ["Rooftop Solar", "Chennai", "Installation"],
    },
    {
      id: 3,
      title: "Net Metering in Tamil Nadu: Complete Policy Overview 2024",
      excerpt: "Understand the latest net metering policies in Tamil Nadu, billing mechanisms, and how to maximize benefits from your solar installation.",
      author: "Priya Sharma",
      date: "March 8, 2024",
      readTime: "5 min read", 
      category: "Policy & Regulation",
      tags: ["Net Metering", "Tamil Nadu", "Policy"],
    },
    {
      id: 4,
      title: "Commercial Solar ROI: Case Study of 50MW Industrial Project",
      excerpt: "Detailed analysis of our recent 50MW industrial solar installation - investment, returns, and key learnings for large-scale commercial solar.",
      author: "Enfros Engineering",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Case Study",
      tags: ["Commercial Solar", "ROI", "Industrial"],
    },
    {
      id: 5,
      title: "Solar Panel Maintenance: Best Practices for Maximum Performance",
      excerpt: "Essential maintenance tips to ensure your solar panels operate at peak efficiency throughout their 25+ year lifespan.",
      author: "Technical Team",
      date: "March 1, 2024",
      readTime: "4 min read",
      category: "Maintenance",
      tags: ["Maintenance", "Performance", "Tips"],
    },
    {
      id: 6,
      title: "Comparing Solar Technologies: Monocrystalline vs Polycrystalline",
      excerpt: "In-depth comparison of different solar panel technologies to help you choose the right solution for your specific requirements and budget.",
      author: "Dr. Suresh Menon",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Technology", "Comparison", "Solar Panels"],
    },
    {
      id: 7,
      title: "Government Subsidies for Solar Energy: Complete Guide 2024", 
      excerpt: "Navigate through central and state government subsidies, tax benefits, and incentives available for solar energy installations across India.",
      author: "Policy Desk",
      date: "February 25, 2024",
      readTime: "9 min read",
      category: "Policy & Regulation",
      tags: ["Subsidies", "Government", "Benefits"],
    },
    {
      id: 8,
      title: "Future of Energy Storage: Battery Technology for Solar Systems",
      excerpt: "Explore emerging battery technologies, cost trends, and how energy storage is revolutionizing solar energy utilization patterns.",
      author: "Innovation Team",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "Technology", 
      tags: ["Battery", "Storage", "Innovation"],
    },
    {
      id: 9,
      title: "Solar for Agriculture: Transforming Rural Energy Access",
      excerpt: "How solar energy is revolutionizing agriculture through solar pumps, grid independence, and additional income generation for farmers.",
      author: "Rural Energy Team",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Agriculture",
      tags: ["Agriculture", "Rural", "Solar Pumps"],
    },
  ];

  const categories = [
    { name: "All", count: blogPosts.length + 1 },
    { name: "Industry Insights", count: 3 },
    { name: "Installation Guide", count: 2 },
    { name: "Policy & Regulation", count: 2 }, 
    { name: "Technology", count: 3 },
    { name: "Case Study", count: 1 },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Industry Insights":
        return Zap;
      case "Installation Guide":
        return User;
      case "Policy & Regulation":
        return DollarSign;
      case "Technology":
        return Leaf;
      case "Case Study":
        return Calendar;
      default:
        return Zap;
    }
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-primary border-primary mb-6">
              Enfros Solar Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-solar">
              Solar Energy Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends, technologies, and insights in solar energy. 
              From installation guides to policy updates and industry analysis.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 text-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center fade-in-up">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "solar" : "outline"} 
                size="sm"
                className="transition-all duration-300"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto fade-in-up">
            <Badge variant="outline" className="text-secondary border-secondary mb-4">
              Featured Article
            </Badge>
            <Card className="shadow-elegant hover:shadow-solar transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-hero aspect-video md:aspect-auto"></div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <Button variant="solar" size="sm">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 gradient-text-solar">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tips, and updates from our solar energy experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <Card 
                  key={post.id} 
                  className="shadow-elegant hover:shadow-eco transition-all duration-300 fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div className="text-xs">
                          <p className="font-medium">{post.author}</p>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Button variant="solar" size="lg" className="shadow-solar">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-eco text-secondary-foreground">
        <div className="container mx-auto px-4 text-center fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest solar energy news, insights, and exclusive content.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-background/10 border-background/20 text-secondary-foreground placeholder:text-secondary-foreground/70"
            />
            <Button variant="hero" className="shadow-elegant">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;