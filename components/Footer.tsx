import Link from "next/link";
import { links } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-serif font-bold mb-4">The Experience Exchange</h4>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Washington & Lee's premier outdoor adventure magazine, connecting students with nature through
              stories, guides, and community-driven content since 2024.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white/80">
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
                  className="lucide lucide-map-pin h-4 w-4 mr-3 flex-shrink-0"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Washington & Lee University, Lexington, VA</span>
              </div>
              <div className="flex items-center text-white/80">
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
                  className="lucide lucide-mail h-4 w-4 mr-3 flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:siuteri@mail.wlu.edu" className="hover:text-white transition-colors">
                  siuteri@mail.wlu.edu
                </a>
              </div>
              <div className="flex items-center text-white/80">
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
                  className="lucide lucide-instagram h-4 w-4 mr-3 flex-shrink-0"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @expowlu
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-amber-bright">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute#submit"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-white/80 hover:text-white transition-colors duration-200">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/sponsorflow" className="text-white/80 hover:text-white transition-colors duration-200">
                  SponsorFlow
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-white/80 hover:text-white transition-colors duration-200">
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-amber-bright">Support Us</h5>
            <p className="text-white/80 mb-4 text-sm">Help us continue sharing outdoor adventures</p>
            <a
              href={links.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gradient-sunset text-forest-dark hover:shadow-nature hover:scale-105 transition-all duration-300 h-9 rounded-md px-3 w-full"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 sm:mb-0">
            © 2024 The Experience Exchange. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <a
              href="https://www.wlu.edu"
              className="text-white/60 hover:text-white transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              W&L University
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
                className="lucide lucide-external-link h-3 w-3 ml-1"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
