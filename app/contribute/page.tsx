import { links } from "@/lib/links";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contribute-hero-background.jpg"
            alt="Person writing outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/80 via-forest-medium/70 to-amber-bright/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
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
                className="lucide lucide-sparkles h-4 w-4 text-white"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span className="text-white text-sm font-medium">Share Your Adventure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Become a Contributor
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto">
              Share your outdoor experiences, photography, and trail insights with the Washington & Lee
              community. Your story could inspire the next adventure.
            </p>
            <a
              href={links.submitStory}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-forest text-white hover:shadow-glow transition-all duration-300 font-medium h-11 rounded-md px-8 min-w-[200px]"
            >
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
                className="lucide lucide-pen-tool h-5 w-5 mr-2"
              >
                <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
                <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                <path d="m2.3 2.3 7.286 7.286" />
                <circle cx="11" cy="11" r="2" />
              </svg>
              Submit Your Story
            </a>
          </div>
        </div>
      </section>
      <main className="animate-fade-in">
        <section id="submit" className="py-16 sm:py-24 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-dark mb-4">
                Share Your Adventure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Experience Exchange thrives on student contributions. Whether you've discovered a hidden
                trail, tested budget gear, or captured the perfect outdoor moment, we want to hear from you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-forest-light hover-lift transition-all duration-300">
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-forest-light/20">
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
                      className="lucide lucide-pen-tool h-8 w-8 text-forest-medium"
                    >
                      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
                      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
                      <path d="m2.3 2.3 7.286 7.286" />
                      <circle cx="11" cy="11" r="2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold tracking-tight text-xl font-serif text-forest-dark">
                    Adventure Stories
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    Share your outdoor experiences, challenges overcome, and lessons learned
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Solo hiking
                      adventures
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Group
                      camping trips
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Outdoor
                      challenges
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-forest-light hover-lift transition-all duration-300">
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-forest-light/20">
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
                      className="lucide lucide-camera h-8 w-8 text-forest-medium"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-semibold tracking-tight text-xl font-serif text-forest-dark">
                    Photography
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    Submit your best outdoor photography with compelling stories behind the shots
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Landscape
                      photography
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Action
                      shots
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Wildlife
                      encounters
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-forest-light hover-lift transition-all duration-300">
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-forest-light/20">
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
                      className="lucide lucide-map h-8 w-8 text-forest-medium"
                    >
                      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                      <path d="M15 5.764v15" />
                      <path d="M9 3.236v15" />
                    </svg>
                  </div>
                  <h3 className="font-semibold tracking-tight text-xl font-serif text-forest-dark">
                    Trail Guides
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4 text-center">
                    Help fellow students discover new trails with detailed guides and tips
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Local day
                      hikes
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Weekend
                      adventures
                    </li>
                    <li className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-amber-warm mr-3 flex-shrink-0"></div>Hidden gems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-forest-medium to-earth-medium rounded-lg p-8 sm:p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-center">
                  Ready to Contribute?
                </h3>
                <p className="text-white/90 text-lg mb-8 text-center max-w-2xl mx-auto">
                  Join the community of W&L students sharing their outdoor adventures. Your story could
                  inspire the next great adventure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-amber-bright">Writing Submissions</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• 500-2000 words maximum</li>
                      <li>• Include high-quality photos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-amber-bright">Photography Submissions</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• High resolution (300 DPI minimum)</li>
                      <li>• Include photo details and story</li>
                      <li>• Original work only</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border-2 border-amber-bright/50">
                  <p className="text-white text-center text-lg mb-2">
                    For complete submission requirements, please review our
                  </p>
                  <a
                    href={links.submissionGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xl font-bold text-amber-bright hover:text-amber-warm underline"
                  >
                    Detailed Submission Instructions
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href={links.submitStory}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-forest text-white hover:shadow-glow transition-all duration-300 font-medium h-11 rounded-md px-8 min-w-[200px]"
                  >
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
                      className="lucide lucide-send h-5 w-5 mr-2"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    Submit Your Story
                  </a>
                  <p className="text-sm text-white/80 mt-4">
                    Questions? Email us at{" "}
                    <a
                      href="mailto:siuteri@mail.wlu.edu"
                      className="text-amber-bright font-medium hover:underline"
                    >
                      siuteri@mail.wlu.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
