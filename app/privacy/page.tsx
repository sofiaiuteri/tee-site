import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-dark mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">Last Updated: 10/5/2026</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">1. Introduction</h2>
              <p className="text-foreground">
                Welcome to The Experience Exchange. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website. Please read this privacy
                policy carefully.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                2. Information We Collect
              </h2>
              <p className="text-foreground">
                We may collect information about you in a variety of ways. The information we may collect
                includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>
                  Personal data such as your name and email address when you subscribe to our newsletter
                </li>
                <li>Information about your device and how you interact with our website</li>
                <li>Content you submit for publication consideration</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                3. Use of Your Information
              </h2>
              <p className="text-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Send you newsletters and updates about The Experience Exchange</li>
                <li>Respond to your submissions and inquiries</li>
                <li>Improve our website and services</li>
                <li>Analyze usage trends and preferences</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                4. Disclosure of Your Information
              </h2>
              <p className="text-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>With Washington & Lee University as part of our institutional affiliation</li>
                <li>When required by law or to protect our rights</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                5. Security of Your Information
              </h2>
              <p className="text-foreground">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the information you provide to us,
                please be aware that no security measures are perfect or impenetrable.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">6. Your Rights</h2>
              <p className="text-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">7. Contact Us</h2>
              <p className="text-foreground">
                If you have questions or comments about this Privacy Policy, please contact us at:
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
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-forest-dark">
                8. Changes to This Policy
              </h2>
              <p className="text-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
