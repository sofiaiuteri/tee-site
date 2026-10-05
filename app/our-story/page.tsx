import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Building a community through shared outdoor experiences
            </p>
          </div>
        </div>
      </section>
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative space-y-6 rounded-lg overflow-hidden">
              <div className="absolute inset-0 min-h-full">
                <img
                  src="/images/editor-desk-background.jpg"
                  alt="Desk with papers and pen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
              </div>
              <div className="relative z-10 p-8 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
                    FROM THE EDITOR
                  </h2>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    By Sofia Iuteri | Founder & Editor-in-Chief
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It wasn't until I turned 15, during the pandemic, that I realized how fortunate I was to
                    live near an accessible, clean, and beautiful beach: Tod's Point in Greenwich, CT.
                    Whenever my friends visited, a trip to Tod's Point was always on our bucket list of
                    nonnegotiable adventures. Whether we biked for miles along the loop, scoured the sand for
                    rare sea glass, or ran cross-country races there, that beach became more than just a
                    park—it was a space of freedom, reflection, and joy.
                  </p>
                  <p>
                    It was a place where I could exist outside and separate from the hustle culture of school
                    and my beloved sport of 10 years—gymnastics. It was a place to cool off from the warm New
                    England summer air. A place for açaí bowls and picnic dinners, where the sun would set on
                    long summers before a return to school—bringing a new year of academic rigor, personal
                    growth, and intellectual development. Tod's Point has shaped my appreciation of nature as
                    more than just a backdrop: it's a source of renewal.
                  </p>
                  <p>
                    Since arriving at Washington & Lee University, I've been intentional about making nature
                    an integral part of my life. Whether through daily walks or runs, handstands in the grass,
                    or quiet moments of meditation on the Colonnade (thank you to my friend Stella for
                    teaching me the importance of slowing down), I've found that getting outside—no matter the
                    weather—is more beneficial than any vitamin or painkiller. Nature is where I unravel my
                    deepest fears and celebrate my greatest joys.
                  </p>
                  <p>
                    This evolving appreciation for nature has also shaped my academic path in environmental
                    economics, where I analyze real-world solutions to modern environmental challenges. But a
                    personal love for nature isn't enough—we must also recognize the extinction of experience,
                    a term introduced to me by my mentor, Professor Margalit. It describes the gradual loss of
                    meaningful human interactions with the natural world. If we lose that connection, how can
                    we expect to protect what we no longer value?
                  </p>
                  <p>
                    That question led me to start The Experience Exchange. I recognized a gap in
                    publications—a lack of spaces where people could share formal and informal experiences in
                    nature. This magazine seeks to fill that void, offering a platform for stories that
                    inspire, inform, and reconnect us to our shared home. Through this edition, our team hopes
                    to highlight the intricate relationships between humans and nature, drive awareness, and
                    foster engagement that combats the extinction of experience.
                  </p>
                  <p>
                    Whether you're an avid outdoors enthusiast or simply someone curious about deepening your
                    connection to nature, The Experience Exchange is for you. This is a welcoming space—no
                    prior environmental activism is required. Curiosity is enough.
                  </p>
                  <p className="font-medium">
                    So, dive in, discover, connect, and reflect. Let's combat the extinction of experience,
                    one story at a time.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12 lg:sticky lg:top-24 lg:self-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8">
                  OUR MISSION
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-serif font-bold text-forest-medium/30">1</span>
                  <div className="pt-2">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      DRIVE POSITIVE CHANGE
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use compelling storytelling, diverse writing styles, and photography to inspire social &
                      environmental progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-serif font-bold text-forest-medium/30">2</span>
                  <div className="pt-2">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      EXPLORE HUMAN-NATURE RELATIONSHIPS
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Investigate and highlight the intricate relationships between people and the natural
                      world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-serif font-bold text-forest-medium/30">3</span>
                  <div className="pt-2">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      DEVELOP HANDS-ON PUBLISHING EXPERIENCE
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gain real-world skills in writing, editing, and production, while creating career
                      opportunities through strategic local partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
