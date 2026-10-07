import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Advertise with Us | The Experience Exchange",
  description:
    "Reach Washington & Lee students and the Lexington outdoor community. Print ads, Instagram features and sponsorship packages from The Experience Exchange.",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 h-11 rounded-md px-8";
const sunsetButton = `${buttonBase} gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105`;
const forestButton = `${buttonBase} gradient-forest text-white hover:shadow-glow`;
const outlineButton = `${buttonBase} border-2 border-white text-white hover:bg-white/20`;

const stats = [
  ["500", "print copies per issue"],
  ["1,300+", "Instagram followers (@expowlu)"],
  ["2", "print issues per year"],
  ["W&L", "students + the Lexington community"],
];

const bundles = [
  {
    name: "Local Partner",
    price: "$150",
    note: "per semester",
    items: ["Half-page print ad", "One Instagram feature post", "Your logo on our Advertisers page", "A thank-you shoutout in our stories"],
  },
  {
    name: "Issue Sponsor",
    price: "$300",
    note: "per issue",
    featured: true,
    items: [
      "Full-page print ad",
      "\"Presented by\" credit inside the issue",
      "Two Instagram feature posts",
      "Your logo on our website",
      "First sponsor read on our upcoming podcast",
    ],
  },
];

const alaCarte = [
  ["Quarter-page print ad", "$25"],
  ["Half-page print ad", "$50"],
  ["Full-page print ad", "$100"],
  ["Instagram feature post", "$40"],
  ["Instagram story mention", "$15"],
];

function inquiry(subject: string) {
  const body = `Hi Sofia,\n\nWe're interested in: ${subject}\n\nBusiness name:\nWebsite:\nBest way to reach us:\n\nThanks!`;
  return `mailto:${links.email}?subject=${encodeURIComponent(`Advertising: ${subject}`)}&body=${encodeURIComponent(body)}`;
}

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-mountain-trail.jpg" alt="Mountain trail at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-forest-medium/70 to-amber-bright/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
              <span className="text-white text-sm font-medium">Media Kit · 2026–27</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">Advertise with The Experience Exchange</h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
              Put your business in front of Washington &amp; Lee students and the Lexington community who love getting outside, in print
              and on Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={inquiry("Sponsorship packages")} className={sunsetButton}>
                Get in touch
              </a>
              <a href="/tee-media-kit.pdf" target="_blank" className={outlineButton}>
                Download media kit (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="animate-fade-in">
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-6">Who you&apos;ll reach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Experience Exchange is W&amp;L&apos;s student-run outdoor adventure magazine. Our readers are students who hike, climb,
                paddle and explore around Rockbridge County, plus the local community that shares those trails and rivers.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map(([n, label]) => (
                <div key={label} className="text-center rounded-lg bg-card shadow-sm border-2 border-border p-6">
                  <div className="text-4xl font-serif font-bold text-forest-dark mb-2">{n}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-4">Sponsorship packages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The best value, and the best way to become part of the TEE community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {bundles.map((b) => (
                <div
                  key={b.name}
                  className={`rounded-lg shadow-sm border-2 p-8 flex flex-col ${b.featured ? "bg-forest-dark border-forest-dark text-white" : "bg-card border-border"}`}
                >
                  <h3 className={`text-2xl font-serif font-semibold ${b.featured ? "text-white" : "text-forest-dark"}`}>{b.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className={`text-5xl font-serif font-bold ${b.featured ? "text-amber-bright" : "text-forest-dark"}`}>{b.price}</span>
                    <span className={`ml-2 text-sm ${b.featured ? "text-white/70" : "text-muted-foreground"}`}>{b.note}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {b.items.map((i) => (
                      <li key={i} className={`flex items-center text-sm ${b.featured ? "text-white/90" : "text-foreground"}`}>
                        <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a href={inquiry(`${b.name} (${b.price})`)} className={b.featured ? sunsetButton : forestButton}>
                    Choose {b.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-dark mb-8 text-center">Individual placements</h2>
              <div className="rounded-lg bg-card shadow-sm border-2 border-border">
                {alaCarte.map(([name, price], i) => (
                  <div key={name} className={`flex items-center justify-between px-6 py-4 ${i ? "border-t border-border" : ""}`}>
                    <span className="text-foreground">{name}</span>
                    <span className="font-serif font-bold text-forest-dark text-xl">{price}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Planning an event, a group trip or a giveaway? We love custom partnerships, and our podcast launches soon.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-forest-dark rounded-lg p-8 sm:p-12 text-center shadow-nature">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Join our local partners</h2>
              <p className="text-white/80 mb-8">
                Walkabout Outfitter, Lex Running Shop, Heliotrope Brewery and other Rockbridge businesses already support student storytelling
                with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={inquiry("Sponsorship packages")} className={sunsetButton}>
                  Email Sofia
                </a>
                <Link href="/advertisers" className={outlineButton}>
                  See our advertisers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
