import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Complete Guide to Remote Team Management",
      excerpt: "Learn proven strategies for managing distributed teams, maintaining culture, and ensuring productivity across time zones. Discover tools and techniques that leading remote companies use.",
      author: "Sarah Chen",
      publishDate: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Team Management",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "10 Productivity Tools Every Remote Worker Needs",
      excerpt: "Discover essential apps and tools that can transform your remote work experience and boost your daily productivity.",
      author: "Mark Johnson",
      publishDate: "Dec 12, 2024",
      readTime: "5 min read",
      category: "Tools & Tech",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Creating Boundaries: Work-Life Balance in Remote Work",
      excerpt: "Practical strategies for maintaining healthy boundaries when your home becomes your office.",
      author: "Emma Davis",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Work-Life Balance",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Async Communication Best Practices",
      excerpt: "Master the art of asynchronous communication to improve team collaboration and reduce meeting fatigue.",
      author: "Alex Rodriguez",
      publishDate: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Communication",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-content-primary mb-4">
            Featured Articles
          </h2>
          <p className="lead max-w-2xl mx-auto">
            Explore our most popular and impactful remote work insights, carefully curated to help you excel in your remote career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              publishDate={post.publishDate}
              readTime={post.readTime}
              category={post.category}
              imageUrl={post.imageUrl}
              featured={index === 0}
              className={`animate-fade-in-up`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;