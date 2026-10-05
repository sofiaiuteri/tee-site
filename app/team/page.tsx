import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals behind Experience Exchange—writers, editors, photographers, and
              designers dedicated to sharing outdoor stories and connecting our community with nature.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/sofia-iuteri.jpg"
                    alt="Sofia Iuteri"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Sofia Iuteri</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Founder & Editor-in-Chief</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    As the Founder and Editor-in-Chief of The Experience Exchange, I blend my passion for
                    nature, entrepreneurship, and community engagement to foster deeper connections between
                    people and the environment.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
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
                      className="lucide lucide-mail h-4 w-4 mr-2 text-forest-medium"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:siuteri@mail.wlu.edu" className="hover:text-foreground transition-colors">
                      siuteri@mail.wlu.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/india-balkaran.jpg"
                    alt="India Balkaran"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">India Balkaran</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer & Photographer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm India, a writer/photographer for The Experience Exchange. I love taking inspiration
                    from the natural world to create my pieces. My love of nature and focus on the natural
                    world in my poetry and photography helps me experience both its goal of introducing our
                    readers to our experiences with the natural world.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/calla-andrews.jpg"
                    alt="Calla Andrews"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Calla Andrews</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Editor, Writer & Photographer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Calla, an editor/writer/photographer for The Experience Exchange. I focus on editing,
                    helping provide suggestions to improve the content in each issue. I also write pieces on
                    local areas to visit, as well as providing photography to show off the beauty of nature.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/kaia-beddows.jpg"
                    alt="Kaia Beddows"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Kaia Beddows</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Editor & Writer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Kaia, a writer and editor for The Experience Exchange. My writing is mostly inspired
                    by nature and the unique emotions and perspectives that being in the outdoors evokes. I
                    aspire to encourage others to see the value in taking a breath of fresh air and
                    experiencing nature.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/rhonica-connor.jpg"
                    alt="Rhonica Ann Connor"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    Rhonica Ann Connor
                  </h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Rhonica Ann Connor, a writer for The Experience Exchange. I focus on poetry and bring
                    fresh perspectives that highlight the beauty and depth of Anguillan culture. Through my
                    poem, I hope to 'big up' my home, Anguilla, and share the most special parts of my world
                    with everyone who reads the piece.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/townsend-dotterer.jpg"
                    alt="Townsend Dotterer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Townsend Dotterer</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Townsend, an alumni writer for The Experience Exchange. I aim to encourage these among
                    you all. It is in these experiences we gain the confidence and skills to support others in
                    positive change.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/margaret-coughlan.jpg"
                    alt="Margaret Anne Coughlan"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    Margaret Anne Coughlan
                  </h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer & Editor</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Margaret, but you can call me Meg! I'm an editor and writer for the Experience
                    Exchange. I believe that nature has so much to offer; we simply must take the time to
                    explore it!
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/carolyn-flowers.jpg"
                    alt="Carolyn Flowers"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Carolyn Flowers</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Graphic Designer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Carolyn, a graphic designer and illustrator for The Experience Exchange. I believe
                    that nature was created for people, and people for nature, striving to show the world that
                    every part of our world, including humanity, has beauty in its own right.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/nora-jacobson.jpg"
                    alt="Nora Jacobson"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Nora Jacobson</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Nora, a new writer for The Experience Exchange! I hope that my contributions to the
                    Experience Exchange will continue to diversify, including everything from interview-heavy
                    pieces to poetry submissions!
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/adelaide-loving.jpg"
                    alt="Adelaide Loving"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Adelaide Loving</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Editor</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Adelaide, an editor for The Experience Exchange. I'm an English and Business major who
                    works at the W&L Writing Center. I believe that both writing and nature hold all the
                    beauty a soul may need.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/mary-jordan-janeski.jpg"
                    alt="Mary Jordan Janeski"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    Mary Jordan Janeski
                  </h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">
                    Graphic Designer & Layout Editor
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Mary Jordan Janeski, a Graphic Design and Layout Editor for The Experience Exchange. I
                    believe in authenticity and out-of-the-box thinking, and I strive to engage readers in our
                    writers' experiences through my contribution in The Experience Exchange.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/lily-nannini.jpg"
                    alt="Lily Nannini"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Lily Nannini</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Writer & Photographer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Lily, a writer and photographer for The Experience Exchange. I believe in using
                    creative properties of art undisturbed found in nature to incite connection to our
                    environment, our companions, and ourselves.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/hudson-pitchford.jpg"
                    alt="Hudson Pitchford"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Hudson Pitchford</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Editor</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Hudson, and I'm an editor for The Experience Exchange. I believe that the threat out
                    into the great outdoors is an essential part of the experience, and that as a society we
                    need to do a better job of understanding and protecting the environment around us.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/easterly-yeaman.jpg"
                    alt="Easterly Yeaman"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Easterly Yeaman</h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">
                    Graphic Designer & Layout Editor
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Easterly Yeaman, and I am a graphic designer for The Experience Exchange. I believe in
                    using design as a means to amplify others' voices and experiences as well as creating
                    visually engaging narratives that celebrate creative expression.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/celeste-silva-carrillo.jpg"
                    alt="Celeste Silva-Carrillo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    Celeste Silva-Carrillo
                  </h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Graphic Designer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Celeste Silva-Carrillo, a Graphic Designer for the Experience Exchange. I believe in
                    the nurturing and introspective qualities of the outdoors that inspire and heal, and I
                    hope to encourage others through my contributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm hover-scale border-2 border-forest-light/30 overflow-hidden">
              <div className="p-0">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/images/charlie-wohlgemuth.jpg"
                    alt="Charlie Wohlgemuth"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    Charlie Wohlgemuth
                  </h3>
                  <p className="text-sm text-forest-medium font-medium mb-4">Editor & Writer</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    I'm Charlie, and I'm a writer and editor for The Experience Exchange. I believe that the
                    threats posed to the living world by global ecological breakdown implore our generation to
                    act, and I hope to inspire people to care.
                  </p>
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
