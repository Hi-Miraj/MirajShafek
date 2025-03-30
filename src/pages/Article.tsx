
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = articles.find((article) => article.slug === slug);
  
  useEffect(() => {
    if (!article) {
      navigate("/not-found");
    }
    
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [article, navigate]);
  
  if (!article) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <article className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to all articles
            </Link>
            
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time>{article.date}</time>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4" />
                {article.categories.map((category) => (
                  <Link
                    key={category}
                    to={`/?category=${category}`}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            
            <div 
              className="prose-custom prose prose-lg mx-auto mt-8 dark:prose-invert lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
