import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "SponsorFlow by The Experience Exchange | Find Sponsors for Your Publication",
  description:
    "SponsorFlow helps student publications, newsletters and podcasts find brands that fit their audience. $29 for 20 researched sponsor matches.",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 h-11 rounded-md px-8";
const sunsetButton = `${buttonBase} gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105`;
const forestButton = `${buttonBase} gradient-forest text-white hover:shadow-glow`;
const outlineButton = `${buttonBase} border-2 border-white text-white hover:bg-white/20`;

const included = [
  {
    title: "20 sponsor prospects",
    body: "Brands researched for your topics, audience, location and size — from national names to the shop down the street.",
  },
  {
    title: "Why each one fits",
    body: "A plain-English reason each brand matches your readers, plus a recommended sponsorship angle to propose.",
  },
  {
    title: "The first line, written",
    body: "A personalized outreach opener for every brand, and a suggested contact or person wherever one is public.",
  },
];

const steps = [
  { n: "1", title: "Tell us about your publication", body: "Topics, audience, location, size and your current rate. It takes two minutes." },
  { n: "2", title: "We research your sponsors", body: "We find brands that market to audiences like yours and explain why each one fits." },
  { n: "3", title: "Start pitching", body: "Your list arrives by email within 3 business days, ready to send." },
];

const sponsors = [
  ["walkabout-outfitter.png", "Walkabout Outfitter"],
  ["lex-running-shop.png", "Lex Running Shop"],
  ["heliotrope-brewery.png", "Heliotrope Brewery"],
  ["blue-ridge-fishing.png", "Blue Ridge Fishing Adventures"],
  ["journey-outdoors.png", "Journey Outdoors"],
  ["outing-club.png", "Outing Club"],
];

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-forest-medium">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function SponsorFlowPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/editor-desk-background.jpg" alt="Editor's desk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-forest-medium/70 to-amber-bright/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
              <span className="text-white text-sm font-medium">New from The Experience Exchange · Founding Beta</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Find the brands that should <span className="text-amber-bright">already</span> be sponsoring you
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
              SponsorFlow researches brands, explains why they fit your audience, and writes the pitch — so student
              publications, newsletters and podcasts can spend their time creating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={links.sponsorflowOrder} target="_blank" rel="noopener noreferrer" className={sunsetButton}>
                Get 20 sponsor matches — $29
              </a>
              <a href={links.sponsorflowPreview} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                Try a free preview
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="animate-fade-in">
        {/* Why we built it */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-6">
                Built by a student magazine
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finding sponsors was one of the hardest parts of launching The Experience Exchange. We learned which
                businesses say yes to a small, engaged audience — and how to ask. SponsorFlow packages that research
                for other small media teams.
              </p>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-6">Local businesses that support The Experience Exchange</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-start">
              {sponsors.map(([file, name]) => (
                <div key={name} className="overflow-hidden rounded-lg shadow-lg">
                  <img src={`/images/${file}`} alt={name} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-4">What you get</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A research-backed sponsor list prepared for your publication.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {included.map((item) => (
                <div key={item.title} className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-forest-light hover-lift transition-all duration-300">
                  <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-forest-light/20">
                      <Check />
                    </div>
                    <h3 className="font-semibold tracking-tight text-xl font-serif text-forest-dark">{item.title}</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground text-center">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-16 text-center">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full gradient-forest text-white text-2xl font-serif font-bold">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-forest-dark mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-forest-dark rounded-lg p-8 sm:p-12 text-center shadow-nature">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 border border-white/40">
                <span className="text-white text-sm font-medium">Founding Beta</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                <span className="text-amber-bright">$29</span> for 20 sponsor matches
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Delivered within 3 business days. Refund if the list isn't useful. Founding Beta customers keep their $29
                price for future lists during the beta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={links.sponsorflowOrder} target="_blank" rel="noopener noreferrer" className={sunsetButton}>
                  Get 20 sponsor matches — $29
                </a>
                <a href={links.sponsorflowPreview} target="_blank" rel="noopener noreferrer" className={outlineButton}>
                  Try a free preview
                </a>
              </div>
              <p className="text-white/60 text-sm mt-8 max-w-xl mx-auto">
                SponsorFlow identifies high-fit sponsorship prospects — not brands that have already agreed to sponsor
                your publication.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">Questions? We reply within 1 business day.</p>
            <a href={`mailto:${links.email}?subject=SponsorFlow question`} className={forestButton}>
              Email us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
