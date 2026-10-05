import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-dark mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">Last Updated: 10/5/2026</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">1. Acceptance of Terms</h2>
              <p className="text-foreground">
                By accessing and using The Experience Exchange website, you accept and agree to be bound by
                the terms and conditions of this agreement. If you do not agree to these terms, please do not
                use this website.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">2. Use License</h2>
              <p className="text-foreground">
                Permission is granted to temporarily access the materials on The Experience Exchange's website
                for personal, non-commercial use only. This is the grant of a license, not a transfer of
                title.
              </p>
              <p className="text-foreground">Under this license, you may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">3. User Submissions</h2>
              <p className="text-foreground">
                By submitting content to The Experience Exchange, you grant us a non-exclusive, worldwide,
                royalty-free license to use, reproduce, modify, and publish your submission. You represent
                that you own or have the necessary rights to the content you submit.
              </p>
              <p className="text-foreground">We reserve the right to refuse or remove any submission that:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Violates any laws or regulations</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains offensive or inappropriate content</li>
                <li>Does not meet our editorial standards</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">4. Disclaimer</h2>
              <p className="text-foreground">
                The materials on The Experience Exchange's website are provided on an 'as is' basis. We make
                no warranties, expressed or implied, and hereby disclaim all warranties including, without
                limitation, implied warranties of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property.
              </p>
              <p className="text-foreground">
                Outdoor activities carry inherent risks. Any information provided on this website is for
                educational purposes only and should not be considered professional advice. Always exercise
                caution and good judgment when participating in outdoor activities.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">5. Limitations</h2>
              <p className="text-foreground">
                In no event shall The Experience Exchange or Washington & Lee University be liable for any
                damages arising out of the use or inability to use the materials on this website.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                6. Links to Third-Party Sites
              </h2>
              <p className="text-foreground">
                Our website may contain links to third-party websites. We have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">7. Intellectual Property</h2>
              <p className="text-foreground">
                All content on The Experience Exchange, including text, graphics, logos, images, and software,
                is the property of The Experience Exchange or its content suppliers and is protected by
                copyright laws.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">8. Modifications</h2>
              <p className="text-foreground">
                The Experience Exchange may revise these Terms of Use at any time without notice. By using
                this website, you agree to be bound by the current version of these terms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">9. Governing Law</h2>
              <p className="text-foreground">
                These terms shall be governed by and construed in accordance with the laws of the Commonwealth
                of Virginia, and you submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">10. Contact Information</h2>
              <p className="text-foreground">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-foreground">
                Email:{" "}
                <a href="mailto:siuteri@mail.wlu.edu" className="text-forest-medium hover:underline">
                  siuteri@mail.wlu.edu
                </a>
              </p>
              <p className="text-foreground">
                The Experience Exchange
                <br />
                Washington & Lee University
                <br />
                Lexington, VA
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
