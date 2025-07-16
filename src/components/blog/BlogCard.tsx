import { Clock, User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  featured?: boolean;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  category,
  imageUrl,
  featured = false,
  className = '',
}: BlogCardProps) => {
  return (
    <article
      className={`group card-elevated bg-card p-0 overflow-hidden cursor-pointer ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      } ${className}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
        <img
          src={imageUrl || '/api/placeholder/600/400'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Badge 
          className="absolute top-4 left-4 bg-primary text-primary-foreground"
        >
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <h3 className={`font-semibold text-content-primary group-hover:text-primary transition-colors duration-normal mb-3 ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden'
            }}>
          {title}
        </h3>
        
        <p className={`text-content-body mb-4 ${
          featured ? 'text-lg leading-relaxed' : ''
        }`}
           style={{
             display: '-webkit-box',
             WebkitLineClamp: 3,
             WebkitBoxOrient: 'vertical' as const,
             overflow: 'hidden'
           }}>
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-content-caption text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <span>{publishDate}</span>
        </div>

        {/* Read More CTA */}
        <div className="flex items-center text-primary font-medium mt-4 group-hover:gap-2 transition-all duration-normal">
          <span>Read Article</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-normal group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;