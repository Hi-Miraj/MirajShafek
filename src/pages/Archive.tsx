
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { articles } from "../data/articles";

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Group articles by year
  const groupedArticles = articles.reduce((groups, article) => {
    const year = article.date.split(", ")[1];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(article);
    return groups;
  }, {} as Record<string, typeof articles>);
  
  // Sort years in descending order
  const sortedYears = Object.keys(groupedArticles).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Archive
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse all articles by date or use the search to find specific content.
            </p>
            
            <div className="mt-8">
              <SearchBar />
            </div>
            
            <div className="mt-12">
              {sortedYears.map((year) => (
                <div key={year} className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold">{year}</h2>
                  <ul className="space-y-4">
                    {groupedArticles[year].map((article) => (
                      <li key={article.id} className="border-b border-border pb-4">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                          <span className="text-sm text-muted-foreground">
                            {article.date.split(", ")[0]}
                          </span>
                          <Link
                            to={`/article/${article.slug}`}
                            className="font-serif text-lg font-medium hover:text-primary sm:text-xl"
                          >
                            {article.title}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Archive;
