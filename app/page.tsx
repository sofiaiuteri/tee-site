import Link from "next/link";
import { links } from "@/lib/links";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-mountain-trail.jpg"
            alt="Misty mountain trail at golden hour with pine trees silhouetted against sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in">
            Adventure Awaits<span className="block text-amber-bright">Just Outside</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in [animation-delay:200ms]">
            Washington & Lee's Experience Exchange inspires deeper connections with nature through
            storytelling and exploration. We celebrate human–nature relationships and strive to combat the
            extinction of experience through narrative, photography, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in [animation-delay:400ms]">
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-forest text-white hover:shadow-glow transition-all duration-300 font-medium h-11 rounded-md px-8"
            >
              Contribute to our magazine!
            </Link>
            <a
              href={links.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-11 rounded-md px-8"
            >
              Purchase
            </a>
            <a
              href={links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-forest-medium text-white border-2 border-forest-light hover:bg-forest-dark hover:border-forest-medium transition-all duration-300 h-11 rounded-md px-8"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent"></div>
      </section>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Inside the Magazine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore stunning photography, compelling stories, and inspiring adventures from the W&L
              community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="overflow-hidden rounded-lg shadow-elevated hover-scale">
              <img
                src="/images/magazine-aurora.jpg"
                alt="Aurora Borealis over campus - featured in magazine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-elevated hover-scale">
              <img
                src="/images/magazine-geology.jpg"
                alt="Beneath the Surface - Geologic Stories magazine spread"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-elevated hover-scale">
              <img
                src="/images/magazine-escape.jpg"
                alt="Escape to Nature - Garmisch-Partenkirchen travel story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-elevated hover-scale">
              <img
                src="/images/magazine-nature-Whl8V3i.jpg"
                alt="Nature photography featuring waterfalls and landscapes"
                className="w-full h-full object-cover"
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
              Get Your Copy Today
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-forest-dark rounded-lg p-8 shadow-elevated">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
              Stay Connected to Adventure
            </h3>
            <p className="font-sans text-white/90 mb-6 leading-relaxed">
              Get weekly updates on new trails, gear reviews, and upcoming outdoor events. Join 100+ W&L
              enthusiasts who never miss an adventure.
            </p>
            <a
              href={links.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-11 rounded-md px-8"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
