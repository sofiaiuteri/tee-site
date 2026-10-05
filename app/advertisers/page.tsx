import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdvertisersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 text-center">
          Our Advertisers
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          We're grateful for the support of the brands and organizations that make storytelling alive and
          accessible. Check them out below!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img src="/images/outing-club.png" alt="Outing Club" className="w-full h-auto display-block" />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/blue-ridge-fishing.png"
              alt="Blue Ridge Fishing Adventures"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/lavender-fields.png"
              alt="Lavender Fields"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/heliotrope-brewery.png"
              alt="Heliotrope Brewery"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/seal-garage-sale.png"
              alt="Seal Garage Sale"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/journey-outdoors.png"
              alt="Journey Outdoors"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img src="/images/junga-chai.png" alt="Junga Chai" className="w-full h-auto display-block" />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/lex-running-shop.png"
              alt="Lex Running Shop"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/walkabout-outfitter.png"
              alt="Walkabout Outfitter"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/rockbridge-radio-D-K7EHUP.png"
              alt="Rockbridge Radio"
              className="w-full h-auto display-block"
            />
          </div>
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-nature transition-all duration-300 hover:scale-105 cursor-pointer">
            <img
              src="/images/appalachian-sage.png"
              alt="Appalachian Sage"
              className="w-full h-auto display-block"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
