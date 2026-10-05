import { links } from "@/lib/links";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/stories-hero-background.jpg"
            alt="Scenic mountain hiking trail at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 opacity-0 animate-fade-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open h-4 w-4 text-amber-bright"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Adventure Stories & Articles</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight opacity-0 animate-fade-in [animation-delay:200ms]">
              Stories from the Trail
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in [animation-delay:400ms]">
              Discover firsthand accounts of adventure, exploration, and outdoor experiences from the
              Washington & Lee community.
            </p>
            <div className="flex flex-wrap gap-8 justify-center text-white/90 text-base sm:text-lg mb-8 opacity-0 animate-fade-in [animation-delay:600ms]">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-compass h-6 w-6 text-amber-bright"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="font-medium">Trail Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-6 w-6 text-amber-bright"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="font-medium">Gear Reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-open h-6 w-6 text-amber-bright"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
                <span className="font-medium">Photo Essays</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Article
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              "The Destructive Dissociation Between the Self and Nature"
            </p>
            <p className="text-base text-muted-foreground">By Sofia Iuteri, Founder & Editor-in-Chief</p>
          </div>
          <div className="flex flex-col gap-8 mb-12">
            <div className="rounded-lg shadow-elevated hover-scale bg-white max-w-5xl mx-auto w-full">
              <img
                src="/images/article-page-1.jpg"
                alt="Article page 1 - The Destructive Dissociation Between the Self and Nature by Sofia Iuteri"
                className="w-full object-contain"
              />
            </div>
            <div className="rounded-lg shadow-elevated hover-scale bg-white max-w-5xl mx-auto w-full">
              <img
                src="/images/article-page-2.jpg"
                alt="Article page 2 - continued analysis of humanity's relationship with nature"
                className="w-full object-contain"
              />
            </div>
            <div className="rounded-lg shadow-elevated hover-scale bg-white max-w-4xl mx-auto w-full">
              <img
                src="/images/article-page-3.jpg"
                alt="Article page 3 - conclusion and works cited"
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <a
              href={links.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-11 rounded-md px-8"
            >
              Get Your Copy to Read More
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-forest-dark to-forest-medium rounded-lg p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Read Our Inaugural Edition
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Dive into our first published magazine featuring student adventures, gear reviews, and stunning
              photography from the W&L outdoor community.
            </p>
            <a
              href={links.digitalEdition}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-11 rounded-md px-8"
            >
              Read Digital Edition
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
