
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, YoutubeIcon, Instagram } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RobotAnimation from "../components/RobotAnimation";
import { articles, categories } from "../data/articles";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const filteredArticles = activeCategory === "ALL" 
    ? articles 
    : articles.filter(article => article.categories.includes(activeCategory));
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="bg-background relative overflow-hidden py-16 md:py-28">
          {/* Background gradient elements - visible only in light mode */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 hero-bg-element">
            <div className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-200/20 to-purple-200/20 blur-3xl"></div>
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/20 to-indigo-200/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left side content */}
              <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
                <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  <span className="text-miraj-red">Miraj</span> Shafek
                </h1>
                
                <div className="overflow-hidden h-24">
                  <p className="text-xl text-muted-foreground mb-2">
                    I like to make things fly, swim, go to space, and walk the earth.
                  </p>
                  <p className="text-xl font-semibold">Making cool machines.</p>
                </div>
                
                <div className="flex space-x-5">
                  <a href="https://x.com/MirajShafek" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7251 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.86259 5.2H7.8686L11.8334 10.7631L12.4527 11.6488L17.656 18.8H15.6499L11.4257 12.9742V12.9738Z" />
                    </svg>
                  </a>
                  <a href="https://github.com/Hi-Miraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com/in/mirajshafek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com/miraj_shafek" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/@Hi-Miraj" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                    <YoutubeIcon className="h-6 w-6" />
                  </a>
                  <a href="mailto:mirajshafek04@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="social-icon">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
                
                <div className="pt-4">
                  <Link to="/about" className="inline-flex items-center px-6 py-3 rounded-md bg-miraj-red text-white font-medium hover:bg-miraj-red/90 transition-colors shadow-md hover:shadow-lg dark:shadow-none">
                    Learn More About Me
                  </Link>
                </div>
              </div>
              
              {/* Right side robot animation */}
              <div className="lg:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md relative">
                  {/* Removed the gradient div here since it's now properly contained in the RobotAnimation component */}
                  <RobotAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles section */}
        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold font-serif mb-8">Latest Articles</h2>
            <SearchBar />
            <div className="my-8">
              <CategoryFilter categories={categories} activeCategory={activeCategory} onFilterChange={setActiveCategory} />
            </div>
            <div className="space-y-0 divide-y divide-border">
              {filteredArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  id={article.id} 
                  date={article.date} 
                  title={article.title} 
                  excerpt={article.excerpt} 
                  categories={article.categories} 
                  slug={article.slug} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
