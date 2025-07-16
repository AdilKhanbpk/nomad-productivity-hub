import { Users, Zap, Settings, Heart, Briefcase, Target } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Team Management",
      description: "Build and lead high-performing remote teams",
      icon: Users,
      postCount: 45,
      color: "bg-blue-500",
    },
    {
      name: "Productivity",
      description: "Boost your efficiency and get more done",
      icon: Zap,
      postCount: 62,
      color: "bg-yellow-500",
    },
    {
      name: "Tools & Tech",
      description: "Essential software and hardware for remote work",
      icon: Settings,
      postCount: 38,
      color: "bg-purple-500",
    },
    {
      name: "Work-Life Balance",
      description: "Maintain wellness and boundaries while working remotely",
      icon: Heart,
      postCount: 34,
      color: "bg-pink-500",
    },
    {
      name: "Career Growth",
      description: "Advance your remote career and skills",
      icon: Briefcase,
      postCount: 28,
      color: "bg-green-500",
    },
    {
      name: "Goal Setting",
      description: "Set and achieve meaningful professional goals",
      icon: Target,
      postCount: 19,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-content-primary mb-4">
            Explore by Category
          </h2>
          <p className="lead max-w-2xl mx-auto">
            Dive deep into specific areas of remote work expertise with our organized content categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group card-elevated bg-card p-6 cursor-pointer animate-fade-in-up"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${category.color} flex-shrink-0`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-content-primary text-lg mb-2 group-hover:text-primary transition-colors duration-normal">
                      {category.name}
                    </h3>
                    <p className="text-content-body text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-content-caption text-sm">
                        {category.postCount} articles
                      </span>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-normal">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;