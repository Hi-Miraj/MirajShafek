
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  categories: string[];
  slug: string;
}

const ArticleCard = ({
  date,
  title,
  excerpt,
  categories,
  slug,
}: ArticleCardProps) => {
  return (
    <article className="group border-b border-border pb-8 pt-8 transition-all hover:border-primary">
      <div className="mb-2 flex items-center text-sm text-muted-foreground">
        <time>{date}</time>
        <span className="mx-2">•</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <Link to={`/article/${slug}`} className="block space-y-2">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
          {title}
        </h2>
        <p className="text-muted-foreground">{excerpt}</p>
      </Link>
      <div className="mt-4">
        <Link
          to={`/article/${slug}`}
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          READ →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
