import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Join Our Team | The Experience Exchange",
  description:
    "The Experience Exchange is looking for designers, social media creators, photographers, videographers and writers. Beginners welcome.",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 h-11 rounded-md px-8";
const sunsetButton = `${buttonBase} gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105`;
const forestButton = `${buttonBase} gradient-forest text-white hover:shadow-glow`;

const roles = [
  {
    title: "Graphic & Layout Designer",
    what: "Lay out our print and digital pages, help shape the look of each issue, and design graphics for Instagram and our website. You'd make our stories feel as good as a day on the trail.",
    who: "Anyone who loves visual storytelling. InDesign, Illustrator, Canva or just a sketchbook full of ideas all count. Beginners are very welcome, and portfolios of any size are great.",
    send: "a few samples of anything you're proud of",
  },
  {
    title: "Social Media & Content Creator",
    what: "Help run @expowlu. Plan posts, film quick Reels on trips and around campus, write captions, and team up with our writers and photographers to share each issue.",
    who: "Someone who likes telling stories on their phone and has ideas about what makes people stop scrolling. You don't need a big following. Curiosity and a good eye matter most.",
    send: "a few posts, videos or ideas you like (yours or a concept)",
  },
  {
    title: "Photographer & Videographer",
    what: "Shoot photos and short videos on hikes, paddles, climbs and campus events, plus portraits for our features. Your work could land in print, on our website and on Instagram.",
    who: "Anyone who loves capturing a moment, on a DSLR, a film camera or a phone. No formal training needed. If your camera roll is full of sunsets and summits, we want to see it.",
    send: "a few favorite shots or clips",
  },
  {
    title: "Writer",
    what: "Write adventure stories, trail guides, gear reviews, travel pieces and profiles of people in our community who get outside. Our editors help shape your ideas.",
    who: "Curious people who like to explore and write about it. All majors welcome, and you don't need clips. A class essay or a journal entry is a fine place to start.",
    send: "one to three writing samples of any kind",
  },
];

const perks = [
  ["Published work", "Your name in print and online, and real portfolio pieces."],
  ["Flexible hours", "Contribute around classes. Do as much as you can."],
  ["Outdoor trips", "Hikes, paddles and adventures with a friendly creative crew."],
];

function applyLink(role: string) {
  const subject = encodeURIComponent(`Application: ${role}`);
  const body = encodeURIComponent(
    `Hi Sofia,\n\nI'd love to join The Experience Exchange as a ${role}.\n\nA bit about me:\n\nMy year / major:\n\nSamples or links:\n\nThanks!`,
  );
  return `mailto:${links.email}?subject=${subject}&body=${body}`;
}

export default function JoinPage() {
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
              <span className="text-white text-sm font-medium">We're growing our team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Join The Experience Exchange
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're looking for designers, social media creators, photographers, videographers and writers who love the
              outdoors. Beginners are welcome, and portfolios of any size are great.
            </p>
            <a href="#roles" className={sunsetButton}>
              See open roles
            </a>
          </div>
        </div>
      </section>

      <main className="animate-fade-in">
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {perks.map(([title, body]) => (
                <div key={title} className="text-center">
                  <h3 className="text-xl font-serif font-semibold text-forest-dark mb-2">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="pb-16 sm:pb-24 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-12 text-center">Open roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {roles.map((role) => (
                <div key={role.title} className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-forest-light transition-all duration-300 flex flex-col">
                  <div className="p-6 pb-4">
                    <h3 className="font-semibold tracking-tight text-2xl font-serif text-forest-dark">{role.title}</h3>
                  </div>
                  <div className="p-6 pt-0 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-forest-medium mb-1">What you'd do</p>
                    <p className="text-muted-foreground mb-4">{role.what}</p>
                    <p className="text-sm font-semibold text-forest-medium mb-1">Who we're looking for</p>
                    <p className="text-muted-foreground mb-6 flex-grow">{role.who}</p>
                    <a href={applyLink(role.title)} className={forestButton}>
                      Apply by email
                    </a>
                    <p className="text-sm text-muted-foreground mt-3 text-center">Send {role.send}.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-forest-dark rounded-lg p-8 sm:p-12 text-center shadow-nature">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Not sure which role fits?</h2>
              <p className="text-white/80 mb-8">
                Tell us what you enjoy and we'll find a spot for you. Email {links.email} or message us on Instagram.
              </p>
              <a href={`mailto:${links.email}?subject=${encodeURIComponent("Joining The Experience Exchange")}`} className={sunsetButton}>
                Say hello
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
