import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Campus Correspondents | The Experience Exchange",
  description:
    "Write, photograph or film the outdoors near your campus and get published by The Experience Exchange, a student outdoor adventure magazine. Open to college students everywhere.",
};

const APPLY = "/join?role=Campus%20Correspondent#apply";

const sunsetButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 h-11 rounded-md px-8 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105";
const outlineButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 h-11 rounded-md px-8 border-2 border-white text-white hover:bg-white/20";

const benefits = [
  ["Get published", "Your stories, photos and films published by a real magazine, online and on Instagram, with standout work considered for print."],
  ["A title for your résumé", "Campus Correspondent at The Experience Exchange, with a path to Campus Editor as you grow your team at your school."],
  ["Editing and mentorship", "Work with student editors who help you sharpen your writing, photography and storytelling. Strong contributors can ask us for recommendation letters."],
  ["A national network", "Connect with outdoorsy student writers, photographers and filmmakers at schools across the country."],
  ["Explore with a purpose", "A reason to get out to the trails, rivers and mountains near your school, and share what you find."],
  ["Perks as we grow", "We're building partnerships with outdoor brands and local businesses, and correspondents will be first in line for gear, discounts and paid opportunities."],
];

const steps = [
  ["Apply", "Tell us your school, what you like to make and the places you love near campus. It takes 3 minutes."],
  ["Pitch", "Send us an idea: a trail guide, a story about a local adventure, a photo essay, a short film."],
  ["Create", "Head out, make it, and work with an editor to get it ready."],
  ["Publish", "We publish it with your name and share it with our readers, and you keep it for your portfolio."],
];

export default function CorrespondentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/stories-hero-background.jpg" alt="Hikers on a mountain trail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-forest-medium/70 to-amber-bright/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
              <span className="text-white text-sm font-medium">Open to college students everywhere</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Become a Campus Correspondent
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
              Write, photograph or film the outdoors near your school, and get published by The Experience Exchange, a student-run
              outdoor adventure magazine founded at Washington &amp; Lee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={APPLY} className={sunsetButton}>
                Apply to be a correspondent
              </Link>
              <a href="#how" className={outlineButton}>
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="animate-fade-in">
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-6">Why join</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every campus has trails, rivers and stories worth telling. We want to share them, and help you build something you&apos;re
                proud of along the way.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map(([title, body]) => (
                <div key={title} className="rounded-lg bg-card shadow-sm border-2 border-border p-6">
                  <h3 className="text-xl font-serif font-semibold text-forest-dark mb-2">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="py-16 sm:py-24 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-12 text-center">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map(([title, body], i) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full gradient-forest text-white text-2xl font-serif font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-forest-dark mb-2">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-dark mb-8 text-center">Good to know</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  <span className="font-semibold text-forest-dark">Who can apply?</span> Any college student in the US. No experience
                  needed, and portfolios of any size are welcome.
                </p>
                <p>
                  <span className="font-semibold text-forest-dark">How much time does it take?</span> As much as you want. Most
                  correspondents contribute one piece a month during the school year.
                </p>
                <p>
                  <span className="font-semibold text-forest-dark">Is it paid?</span> Correspondent roles are volunteer for now. We&apos;re
                  working on paid opportunities and partner perks, and correspondents will hear about them first.
                </p>
                <p>
                  <span className="font-semibold text-forest-dark">Can I bring friends?</span> Yes. Campus Editors can build a small team
                  of writers and photographers at their school.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-forest-dark rounded-lg p-8 sm:p-12 text-center shadow-nature">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Your campus has a story. Tell it with us.</h2>
              <p className="text-white/80 mb-8">Applications are open all year.</p>
              <Link href={APPLY} className={sunsetButton}>
                Apply now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
