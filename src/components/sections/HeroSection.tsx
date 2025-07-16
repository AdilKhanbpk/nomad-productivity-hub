import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-remote-work.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container-content section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-content-primary leading-tight">
                Remote work
                <span className="text-primary block">made simple</span>
              </h1>
              <p className="lead max-w-lg">
                Discover productivity strategies, team management insights, and work-life balance tips that successful remote professionals use every day.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary inline-flex items-center gap-2">
                Explore Articles
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button className="btn-secondary inline-flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Guide
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-content-primary">50k+</div>
                <div className="text-content-caption">Monthly readers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-content-primary">200+</div>
                <div className="text-content-caption">Expert articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-content-primary">15k+</div>
                <div className="text-content-caption">Newsletter subscribers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Modern remote work setup"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                  <span className="text-success-foreground font-semibold">98%</span>
                </div>
                <div>
                  <div className="font-semibold text-content-primary">Productivity</div>
                  <div className="text-content-caption text-sm">Increase</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                  <span className="text-warning-foreground font-semibold">4.8</span>
                </div>
                <div>
                  <div className="font-semibold text-content-primary">Rating</div>
                  <div className="text-content-caption text-sm">From readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
    </section>
  );
};

export default HeroSection;