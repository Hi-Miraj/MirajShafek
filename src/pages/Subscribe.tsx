
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useToast } from "../hooks/use-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Subscribe
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join my newsletter to get the latest articles and insights delivered directly to your inbox.
            </p>
            
            <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold">Newsletter Subscription</h2>
              <p className="mt-2 text-muted-foreground">
                I send updates approximately once per month, focusing on new articles, book recommendations, 
                and occasional thoughts on technology and philosophy that don't make it into full articles.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-muted-foreground">
                Your email will never be shared. You can unsubscribe at any time.
              </p>
            </div>
            
            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-xl font-bold">What to Expect</h3>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>New article notifications</li>
                  <li>Book recommendations and reviews</li>
                  <li>Technology analysis and commentary</li>
                  <li>Early access to new projects and writing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold">No Spam Promise</h3>
                <p className="mt-2 text-muted-foreground">
                  I respect your inbox and your attention. No sponsored content, no affiliate links, 
                  and no excessive emails—just thoughtful content delivered occasionally.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Subscribe;
